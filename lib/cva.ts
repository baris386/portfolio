// Simple class-variance-authority replacement
type ClassValue = string | number | boolean | undefined | null
type ClassArray = ClassValue[]
type ClassDictionary = Record<string, any>
type ClassProp = ClassValue | ClassArray | ClassDictionary

export function cn(...inputs: ClassProp[]): string {
  const classes: string[] = []

  for (const input of inputs) {
    if (!input) continue

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input))
    } else if (Array.isArray(input)) {
      const result = cn(...input)
      if (result) classes.push(result)
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) classes.push(key)
      }
    }
  }

  return classes.join(" ")
}

type ConfigSchema = Record<string, Record<string, ClassValue>>
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: keyof T[Variant]
}
type Props<T extends ConfigSchema> = ConfigVariants<T>

export type VariantProps<T extends (...args: any) => any> = Omit<Parameters<T>[0], "class" | "className">

export function cva<T extends ConfigSchema>(
  base: ClassValue,
  config?: {
    variants?: T
    defaultVariants?: ConfigVariants<T>
  },
) {
  return (props?: Props<T> & { class?: ClassValue; className?: ClassValue }) => {
    if (!config?.variants) {
      return cn(base, props?.class, props?.className)
    }

    const { variants, defaultVariants } = config
    const classes: ClassValue[] = [base]

    for (const variantName in variants) {
      const variantValue = props?.[variantName as keyof typeof props] ?? defaultVariants?.[variantName]

      if (variantValue) {
        classes.push(variants[variantName][variantValue as string])
      }
    }

    classes.push(props?.class, props?.className)
    return cn(...classes)
  }
}

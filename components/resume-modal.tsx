"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-800 border border-zinc-600 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-600">
          <h2 className="text-2xl font-bold text-white">Resume</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white hover:text-black hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="space-y-8">
            {/* About Me Section */}
            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-white border-b border-zinc-600 pb-2">About Me</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                My name is Abbaszadə Barış, and I am a dedicated computer science student. 
                I have a strong passion for programming and problem-solving, which has driven me to
                actively participate in competitive programming contests. 
                I am committed to continuous learning and growth in the field of computer science.
              </p>
            </section>

            {/* Experience Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b border-zinc-600 pb-2 text-white">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-white">Junior Competitive Programmer</h4>
                  <p className="text-sm text-gray-400">RFO • 2023 - 2024 and 2024 - 2025 Finalist</p>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white"></h4>
                  <p className="text-sm text-gray-400"></p>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b border-zinc-600 pb-2 text-white">Education</h3>
              <div>
                <h4 className="font-semibold text-lg text-white">Don't Graduated</h4>
                <p className="text-sm text-gray-400"></p>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold border-b border-zinc-600 pb-2 text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python", "Competitive Programming"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-700 border border-zinc-500 text-white text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

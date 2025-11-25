import React from 'react'
import { Zap, Shield, TrendingUp, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Translation: Understand Every Woof',
    description: 'Our AI algorithms instantly translate barks, whines, and whimpers into human-understandable language. No more guessing games!',
  },
  {
    icon: Shield,
    title: 'Secure & Private: Your Dog’s Thoughts Are Safe', 
    description: 'We use advanced encryption to ensure your conversations with your dog remain private and secure. Your data is never shared.',
  },
  {
    icon: TrendingUp,
    title: 'Behavior Insights: Predict and Prevent Issues', 
    description: 'BarkBot analyzes chat patterns to identify potential behavioral issues before they escalate. Get personalized tips to improve your dog’s well-being.',
  },
  {
   icon: MessageCircle,
   title: '24/7 Connection: Chat Anytime, Anywhere',
   description: 'Whether you’re at work or on vacation, stay connected with your dog. BarkBot is available 24/7 to facilitate meaningful conversations.'
  }
]

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Unlock a Deeper Connection with Your Best Friend</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-10 h-10 text-primary mb-4" aria-hidden="true"/>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

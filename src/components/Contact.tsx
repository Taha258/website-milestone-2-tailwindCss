import React from 'react'

export default function Contact() {
  return (
    <section>
      <div id='contact' className="w-full py-12 bg-cover bg-center" style={{ backgroundImage: "url('/blog-1.jpg')" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl w-full bg-white mx-auto p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-verdana text-center mb-8">Get In Touch</h3>

            <form>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="font-semibold mb-2">Name</label>
                <input type="text" placeholder='Enter your Name' className="p-3 border border-gray-300 rounded-md" />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="font-semibold mb-2">Email</label>
                <input type="email" placeholder='Enter your Email' className="p-3 border border-gray-300 rounded-md" />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="phone" className="font-semibold mb-2">Phone</label>
                <input type="tel" placeholder='Enter your Phone No' className="p-3 border border-gray-300 rounded-md" />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="date" className="font-semibold mb-2">Date</label>
                <input type="date" className="p-3 border border-gray-300 rounded-md" />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="time" className="font-semibold mb-2">Time</label>
                <input type="time" className="p-3 border border-gray-300 rounded-md" />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="person" className="font-semibold mb-2">No. Of Persons</label>
                <input type="number" placeholder='Enter Number' className="p-3 border border-gray-300 rounded-md" />
              </div>

              <button className="w-full py-3 mt-6 border border-[#f0a211] text-lg font-medium text-[#f0a211] hover:bg-[#f0a211] hover:text-white transition-colors duration-300 rounded-md">
                Book Your Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

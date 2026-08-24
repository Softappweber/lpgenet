export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🚀 Landing Page Generator
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Category</h2>
            <select className="w-full p-3 border rounded-lg mb-4">
              <option>🏡 Real Estate</option>
              <option>🛒 E-commerce</option>
              <option>☁️ SaaS</option>
              <option>🏥 Healthcare</option>
              <option>📚 Education</option>
            </select>
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
              🚀 Generate Landing Page
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-500">
              Select options and generate
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

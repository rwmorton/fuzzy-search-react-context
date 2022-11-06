import FuzzySearch from './FuzzySearch'

function App() {
  return (
    <div className="container items-center mx-auto max-w-3xl my-8">
      <FuzzySearch baseUrl="https://dummyjsasdgon.com/products/search?q=" placeholder="Search products" />
    </div>
  )
}

export default App

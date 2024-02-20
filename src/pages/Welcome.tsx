import Button from '../components/Button'

const redirectTypes = () => {
  window.location.href = '/pokemon-types'
}

export default function Welcome() {
  return (
    <div className="text-purple-400 text-center">
        <h1 className="mb-2">Welcome!</h1>
        <h2 className="mb-6">Select your type of pokemon</h2>
        <Button label="Go to types page" onclick={redirectTypes} />
    </div>
  )
}

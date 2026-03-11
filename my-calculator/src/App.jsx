import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [op, setOp] = useState(null)
  const [result, setResult] = useState('')

  function calculate() {
    const n1 = Number(num1)
    const n2 = Number(num2)
    switch (op) {
      case '+': setResult(n1 + n2); break
      case '-': setResult(n1 - n2); break
      case '*': setResult(n1 * n2); break
      case '/':
        if (n2 === 0) setResult('Ошибка: деление на ноль')
        else setResult(n1 / n2)
        break
      default: setResult('Выберите операцию')
    }
  }

  function clear() {
    setNum1('')
    setNum2('')
    setOp(null)
    setResult('')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Калькулятор
        </h1>

        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Число 1"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between mb-4 gap-2">
          {['+', '-', '*', '/'].map((o) => (
            <button
              key={o}
              onClick={() => setOp(o)}
              className={`flex-1 py-2 rounded-lg font-bold text-lg transition
                ${op === o
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
            >
              {o}
            </button>
          ))}
        </div>

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Число 2"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={calculate}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          Подсчитать
        </button>

        <button
          onClick={clear}
          className="w-full bg-red-400 text-white py-2 rounded-lg font-bold hover:bg-red-500 transition mt-2"
        >
          Очистить
        </button>

        {result !== '' && (
          <p className="mt-4 text-center text-xl font-semibold text-gray-700">
            Результат: {result}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
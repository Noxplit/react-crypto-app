import AppLayout from './AppLayout.jsx'
import { CryptoContextProvider } from './context/context.jsx'

function App() {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider>
	)
}

export default App

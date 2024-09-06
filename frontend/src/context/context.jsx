import { createContext, useContext, useEffect, useState } from 'react'
import { fakeCrypto, fetchAssets } from '../components/data/api'
import { growDifference } from '../utils'

const cryptoContext = createContext({
	asset: [],
	crypto: [],
	loading: false,
})

export function CryptoContextProvider({ children }) {
	const [loading, setLoading] = useState(false)
	const [crypto, setCrypto] = useState([])
	const [asset, setAsset] = useState([])

  function mapAsset(asset, result) {

   return asset.map(asset => {
    const coin = result.find(c => c.id === asset.id)

      return {
        grow: asset.price < coin.price,
        growPercent: growDifference(asset.price, coin.price),
        totalAmount: asset.amount * coin.price,
        totalProfit: `${+(asset.amount * coin.price - asset.amount * asset.price).toFixed(
          2,
        )} $`,
        ...asset,
      }
    } )
					
  }

	useEffect(() => {
		async function preload() {
			setLoading(true)
			const { result } = await fakeCrypto()
			const assets = await fetchAssets()
			setAsset(
				mapAsset(assets, result)
			)
			setCrypto(result)
			setLoading(false)
		}
		preload()
	}, [])
  function addAssets(newAsset) {
    setAsset(prev => mapAsset([...prev, newAsset], crypto))
  }
	return (
		<cryptoContext.Provider value={{ crypto, asset, loading,addAssets }}>{children}</cryptoContext.Provider>
	)
}



export default cryptoContext

export function useCrypto() {
	return useContext(cryptoContext)
}

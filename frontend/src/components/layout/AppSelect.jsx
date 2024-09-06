import { Select, Space } from 'antd'
import { cryptoData } from '../data/cryptoData'

const AppSelect = ({setModal, chooseCoin, setChooseCoin}) => {

  
	const crypto = cryptoData.result
  const map = crypto.map( coin => {
    return {
      value:coin.id,
      ...coin
    }
  })
  console.log(map);
  
  function handleSelect(value) {
    console.log(value);
    
setChooseCoin(chooseCoin.find(coin => coin.id === value))

  }

 

	return (
		<Select
			style={{
				width: '250px',
			}}
      onChange={() => setModal(true)}
      onSelect={handleSelect}
			value={'Select some coin'}
			// defaultValue={}
			options={map}
			optionRender={({ data:options }) => (
				<Space
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
						marginBottom: '10px',
					}}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
						<img style={{ width: '25px' }} src={options.icon} alt={options.name} />
						<span> {options.name}</span>
					</div>
					<span> {`${+options.price.toFixed(0)}$`}</span>
				</Space>
			)}

		/>
	)
}

export default AppSelect

import {
	Button,
	DatePicker,
	Form,
	InputNumber,
	Result,
	Select,
	Space,
	Typography,
} from 'antd'
import { useRef, useState } from 'react'
import { cryptoData } from '../data/cryptoData'
import { useCrypto } from '../../context/context'

const AddAssetForm = ({ onClose }) => {
  const {addAssets} = useCrypto()
	const [coin, setCoin] = useState(null)
	const [form] = Form.useForm()
	const [submitted, setSubmitted] = useState(false)
  const assetRef = useRef()
  

	function handleAmountChange(value) {
		const amount = form.getFieldValue('price')
		form.setFieldsValue({
			total: +(value * amount).toFixed(2),
		})
	}
	function handleFinish(value) {
		const newAsset = {
      id:coin.id,
      amount:value.amount,
      image:coin.icon,
      price:value.price,
      date:value.date.id ?? new Date()
    }
    assetRef.current = newAsset
    addAssets(newAsset)
    setSubmitted(true)
	}
	function handlePriceChange(value) {
		const price = form.getFieldValue('amount')
		form.setFieldsValue({
			total: +(value * price).toFixed(2),
		})
	}

	const map = cryptoData.result.map(coin => {
		return {
			value: coin.id,
			...coin,
		}
	})

	if (!coin) {
		return (
			<Select
				style={{
					width: '100%',
				}}
				onSelect={v => setCoin(map.find(c => c.id === v))}
				value={'Select some coin'}
				options={map}
				optionRender={({ data: options }) => (
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
						<span> {`${+options.price.toFixed(1)}$`}</span>
					</Space>
				)}
			/>
		)
	}
	if (submitted) {
		return (
			<Result
				status={'success'}
				title={'Success adding asset'}
				subTitle={`Added ${coin.id} by price ${assetRef.current.price * assetRef.current.amount } and amount:${assetRef.current.amount}`}
				extra={[
					<Button type='primary' onClick={onClose} key={'console'}>
						Close console
					</Button>,
				]}
			/>
		)
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<img style={{ width: '50px', marginTop: '10px' }} src={coin.icon} alt={coin.id} />
			<Typography.Title>{coin.name}</Typography.Title>
			<Form
				onFinish={handleFinish}
				form={form}
				initialValues={{
					price: +coin.price.toFixed(2),
				}}
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'start',
					alignItems: 'start',
					flexDirection: 'column',
				}}>
				<Form.Item label='Amount' name='amount'>
					<InputNumber
						placeholder='Enter coin amount'
						onChange={handleAmountChange}
						required
						style={{ width: '100%' }}
					/>
				</Form.Item>
				<Form.Item label='Price' name='price'>
					<InputNumber onChange={handlePriceChange} style={{ width: '100%' }} />
				</Form.Item>
				<Form.Item label='Date' name='date'>
					<DatePicker style={{ width: '100%' }} showTime />
				</Form.Item>
				<Form.Item label='Total' name='total'>
					<InputNumber disabled style={{ width: '100%' }} />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Add Assets
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddAssetForm

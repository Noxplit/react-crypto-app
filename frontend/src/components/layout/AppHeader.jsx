import { Header } from 'antd/es/layout/layout'
import AppSelect from './AppSelect'
import { Button, Modal, Drawer } from 'antd'
import { useState } from 'react'
import { cryptoData } from '../data/cryptoData'
import CoinInfoModal from '../../CoinInfoModal'
import AddAssetForm from './AddAssetForm'

const AppHeader = () => {
	const headerStyle = {
		textAlign: 'center',
		color: '#111',
		width: '100%',
		padding: '1rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
	const [modal, setModal] = useState(false)
	const [chooseCoin, setChooseCoin] = useState(cryptoData.result)
	const [drawer, setDrawer] = useState(false)

	function handelOk() {
		setModal(false)
		setChooseCoin(cryptoData.result)
	}
	function handelCancel() {
		setModal(false)
		setChooseCoin(cryptoData.result)
	}

	return (
		<Header style={headerStyle}>
			<AppSelect setModal={setModal} chooseCoin={chooseCoin} setChooseCoin={setChooseCoin} />
			<Button type='primary' onClick={() => setDrawer(true)}>
				Add Asset Text
			</Button>
			<Drawer width='500px' destroyOnClose title='Add Assets' onClose={() => setDrawer(false)} open={drawer}>
				<AddAssetForm onClose={() => setDrawer(false)} />
			</Drawer>
			<Modal style={{ textAlign: 'center' }} open={modal} onOk={handelOk} onCancel={handelCancel}>
				<CoinInfoModal coin={chooseCoin} />
			</Modal>
		</Header>
	)
}

export default AppHeader

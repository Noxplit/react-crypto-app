import { Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useCrypto } from '../../context/context'
import PortfolioChart from '../../PortfolioChart'
import AssetsTable from '../../AssetsTable'

const AppContent = () => {
	const contentStyle = {
		textAlign: 'center',
		minHeight: 'calc(100vh - 60px)',
		color: '#fff',
		backgroundColor: '#001529', 
	}
   const {asset,crypto} = useCrypto()
	return <Content style={contentStyle}>
    <Typography.Title level={3} style={{textAlign:'left', color:'#fff'}}>Portfolio:{asset.map((assets) => {
      const coin = crypto.find(c => c.id === assets.id)
      return assets.amount * coin.price
    }).reduce((acc,v) => (acc+=v), 0).toFixed(2)}$</Typography.Title>
    <PortfolioChart/>
    <AssetsTable/>
  </Content>
}

export default AppContent

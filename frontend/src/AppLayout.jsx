import { Layout, Spin } from 'antd'
import './main.css'
import AppHeader from './components/layout/AppHeader'
import AppContent from './components/content/AppContent'
import AppSider from './components/sider/AppSider'
import { useContext } from 'react'
import cryptoContext from './context/context'

const AppLayout = () => {
	const { loading } = useContext(cryptoContext)

  if(loading)
 {
  return <Spin  fullscreen/>
 }
	return (
		<Layout >
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent />
			</Layout>
		</Layout>
	)
}

export default AppLayout

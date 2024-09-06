import Card from 'antd/es/card/Card'
import Sider from 'antd/es/layout/Sider'
import Statistic from 'antd/es/statistic/Statistic'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { List, Typography, Tag, Image } from 'antd'
import { useContext } from 'react'
import cryptoContext from '../../context/context.jsx'

const AppSider = () => {
	const siderStyle = {
		textAlign: 'center',
		lineHeight: '120px',
		color: '#fff',
		backgroundColor: '#001629',
	}
	const { Text } = Typography

	const { asset } = useContext(cryptoContext)


	return (
		<Sider width='25%' style={siderStyle}>
			{asset.map(assets => (
				<Card
					key={assets.id}
					title={String(assets.id).toUpperCase()}
					style={{
						width: 350,
		marginBottom:10
					}}>
					<Image  src={assets.image} alt={assets.id} style={{ width: 50 }} />
					<Statistic
						value={assets.totalAmount}
						precision={2}
						valueStyle={{
							color: assets.grow ? '#3f8600' : '#cf1322',
						}}
						style={{ margin: 20 }}
						prefix={assets.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
						suffix='$'
					/>
					<List
						size='small'
						dataSource={[
							{
								title: 'Total Profit $',
								value: assets.totalProfit,
								tagPercent: true,
								isPlain: true,
							},
							{ title: 'Assets Amount ', value: assets.amount, isPlain: false },
							{ title: 'Price buying', value: `${assets.price} $`, isPlain: true },
						]}
						renderItem={item => (
							<List.Item>
								<p>
									<strong>{item.title}</strong>
								</p>
								{item.tagPercent && (
									<Tag color={assets.grow ? 'green' : 'red'}>{`${+assets.growPercent.toFixed(
										2,
									)} %`}</Tag>
								)}
								{!item.isPlain && <span>{item.value}</span>}
								{item.isPlain && (
									<Text type={assets.grow ? 'success' : 'warning'}>{item.value}</Text>
								)}
							</List.Item>
						)}
					/>
				</Card>
			))}
			{/* <Card
				title='Default size card'
				extra={<a href='#'>More</a>}
				style={{
					width: 300,
					margin: 10,
				}}>
				<Statistic
					title='Active'
					value={11.28}
					precision={2}
					valueStyle={{
						color: '#3f8600',
					}}
					prefix={<ArrowUpOutlined />}
					suffix='%'
				/>
				<List
					size='small'
					dataSource={data}
					renderItem={item => (
						<List.Item>
							<Typography.Text mark>[ITEM]</Typography.Text> {item}
						</List.Item>
					)}
				/>
			</Card>
			<Card
				title='Default size card'
				extra={<a href='#'>More</a>}
				style={{
					width: 300,
					margin: 10,
				}}>
				<Statistic
					title='Idle'
					value={9.3}
					precision={2}
					valueStyle={{
						color: '#cf1322',
					}}
					prefix={<ArrowDownOutlined />}
					suffix='%'
				/>
			</Card> */}
		</Sider>
	)
}

export default AppSider

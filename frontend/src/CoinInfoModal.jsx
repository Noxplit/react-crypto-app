import { Statistic, Flex, Typography, Tag } from 'antd'

const CoinInfoModal = ({ coin }) => {
	return (
		<div
			key={coin.id}
			style={{
				margin: '0 auto',
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				fontSize: '20px',
				justifyContent: 'start',
				alignItems: 'start',
			}}>
			<img
				style={{ width: '70px', margin: '0 auto', marginTop: '10px' }}
				src={coin?.icon}
				alt={coin.id}
			/>
			<strong style={{ textTransform: 'uppercase' }}>{coin?.id}</strong>
			<Flex style={{ justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
				<Flex style={{ gap: '5px' }}>
					<Typography.Text>Price 1h</Typography.Text>
					<Tag color={coin.priceChange1h <= 0 ? 'green' : 'red'}>{`${coin.priceChange1h}%`}</Tag>
				</Flex>
				<Flex style={{ gap: '5px' }}>
					<Typography.Text>Price 1h</Typography.Text>
					<Tag color={coin.priceChange1d <= 0 ? 'green' : 'red'}>{`${coin.priceChange1d}%`}</Tag>
				</Flex>
				<Flex style={{ gap: '5px' }}>
					<Typography.Text>Price 1h</Typography.Text>
					<Tag color={coin.priceChange1w <= 0 ? 'green' : 'red'}>{`${coin.priceChange1w}%`}</Tag>
				</Flex>
			</Flex>
			<Typography.Paragraph style={{ marginTop: '20px' }}>
				<Typography.Text style={{ fontWeight: 'bold' }}>Price: </Typography.Text>
				{`${+coin.price.toFixed(2)} $`}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text style={{ fontWeight: 'bold' }}>Market Cap: </Typography.Text>
				{`${+coin.marketCap.toFixed(2)} $`}
			</Typography.Paragraph>
			{coin.contractAddress && (
				<Typography.Paragraph>
					<Typography.Text style={{ fontWeight: 'bold' }}>Contract Address: </Typography.Text>
					{coin.contractAddress}
				</Typography.Paragraph>
			)}
			{!coin.contractAddress && (
				<Typography.Paragraph>
					<Typography.Text style={{ fontWeight: 'bold' }}>
						Contract Address: Not exist{' '}
					</Typography.Text>
				</Typography.Paragraph>
			)}
		</div>
	)
}

export default CoinInfoModal

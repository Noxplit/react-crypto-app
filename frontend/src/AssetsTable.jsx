import { Table } from 'antd'
import { useCrypto } from './context/context'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		showSorterTooltip: {
			target: 'full-header',
		},
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'Jim',
				value: 'Jim',
			},
			{
				text: 'Submenu',
				value: 'Submenu',
				children: [
					{
						text: 'Green',
						value: 'Green',
					},
					{
						text: 'Black',
						value: 'Black',
					},
				],
			},
		],
		// specify the condition of filtering result
		// here is that finding the name started with `value`
		onFilter: (value, record) => record.name.indexOf(value) === 0,
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Price',
		dataIndex: 'price',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.totalAmount - b.totalAmount,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
    defaultSortOrder: 'descend',
		sorter: (a, b) => a.amount - b.amount,
	},
]

const onChange = (pagination, filters, sorter, extra) => {
	console.log('params', pagination, filters, sorter, extra)
}

const AssetsTable = () => {
	const { asset } = useCrypto()
console.log(asset);

	const data = asset.map(a => {
		return {
			key: a.id,
			name: a.id,
			price: `${+(a.totalAmount).toFixed(2)} $`,
			amount: a.amount,
		}
	})
	return (
		<Table
			columns={columns}
			dataSource={data}
			onChange={onChange}
			showSorterTooltip={{
				target: 'sorter-icon',
			}}
		/>
	)
}
export default AssetsTable

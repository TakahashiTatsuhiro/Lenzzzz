const ItemsList = () => {
	return (
		<div className='items__container'>
			<div className='items__header'>
				<button>ホーム</button>
				<button>検索</button>
			</div>
			<div className='items__add'>
				<button >新しいアイテムを追加</button>
			</div>
			<div className='items__list'>
				<div className='item'>
					<img className='item__img' src='./src/assets/bousaisyoku.png' alt='防災食' />
					<p className='item__name'>防災食</p>
				</div>
				<div className='item'>
					<img className='item__img' src='./src/assets/eacon.png' alt='防災食' />
					<p className='item__name'>エアコン</p>
				</div>
				<div className='item'>
					<img className='item__img' src='./src/assets/reizouko.png' alt='防災食' />
					<p className='item__name'>冷蔵庫</p>
				</div>
				<div className='item'>
					<img className='item__img' src='./src/assets/rimokon.png' alt='防災食' />
					<p className='item__name'>リモコン</p>
				</div>
				<div className='item'>
					<img className='item__img' src='./src/assets/sentaku.png' alt='防災食' />
					<p className='item__name'>洗濯機</p>
				</div>
				<div className='item'>
					<img className='item__img' src='./src/assets/soujiki.png' alt='防災食' />
					<p className='item__name'>掃除機</p>
				</div>
			</div>
		</div>
	);
};

export default ItemsList;

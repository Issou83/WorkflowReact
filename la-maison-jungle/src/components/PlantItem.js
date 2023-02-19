import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({id,cover, name, water, light}) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handldeClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handldeClick(plantName) {
    console.log(`Voulez vous acheter un ${plantName}`);
}

export default PlantItem
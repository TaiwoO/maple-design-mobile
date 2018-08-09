import _ from 'lodash';

export class Character {

    static DEFAULT_SKIN = 2000;
    static DEFAULT_ITEM = 1102039; // no items 

    constructor(
        id = _.uniqueId(),
        name = '',
        equiptedItems = {},
        //selectedItems = new Set(),
        type = 'character',
        action = 'stand1',
        emotion = 'default',
        skin = Character.DEFAULT_SKIN,
        zoom = 1,
        frame = 0,
        mercEars = false,
        illiumEars = false,
        // selectedItems = [],
        visible = true,
        position = { x: 0, y: 0 },
        fhSnap = true,
    ) {
        this.id = id;
        this.name = name;
        this.equiptedItems = equiptedItems;
        // this.selectedItems = selectedItems;
        this.type = type;
        this.action = action;
        this.emotion = emotion;
        this.skin = skin;
        this.zoom = zoom;
        this.frame = frame;
        this.mercEars = mercEars;
        this.illiumEars = illiumEars;
        this.visible = visible;
        this.position = position;
        this.fhSnap = fhSnap;
    }

    generateImageUrl = () => {
        return `https://labs.maplestory.io/api/gms/latest/Character/${this.skin}/${ _.values(this.equiptedItems).join(',') || Character.DEFAULT_ITEM}/${this.action}/${this.frame}?showears=${this.mercEars}&showLefEars=${this.illiumEars}&resize=${this.zoom}&name=${this.name}`
    }


    addItem = (item) => {
        let itemSubcategory = item.typeInfo.subCategory
        this.equiptedItems[itemSubcategory] = item.id
    }

}
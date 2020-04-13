class RPG{

    constructor (name, hp, mp, weapon, attack){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.weapon = weapon;
        this.attack = attack;

    }
}

let Yuusya = new RPG(
    '勇者','200','200','ロトの剣','ギガスラッシュ'
);

class Wizard extends RPG{

    constructor(name, hp, mp, weapon, attack, recite){
    }
        
}
let Wizard = new RPG(
    '魔法使い','100','400','スタッフ','メテオ','呪文を唱える'
);

class Cleric extends RPG{

    constructor(name, hp, mp, weapon, attack, heal){
    }
        
}
let Cleric = new RPG(
    'ヒーラー','100','300','メイス','ルーラ','回復する'
);

class Berseker extends RPG{

    constructor(name, hp, mp, weapon, attack){
    }
        
}
let Berserker = new RPG(
    'バーサーカー','400','50','巨剣','破断','獣化'
);

console.log(berserker);

class Enemy{
    constructor (name, hp, mp, weapon, attack){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.weapon = weapon;
        this.attack = attack;

    }
}

// class Slime extends Enemy{
//     constructor (name, hp, mp, weapon, attack){
//         super(name, hp, mp, weapon, attack, escape);
// }
// let Slime = new Enemy(
//     'スライム','20','20','無し','逃げる'
// )


// class Ork extends Enemy{
//     constructor (name, hp, mp, weapon, attack){
//         super(name, hp, mp, weapon, attack, escape);
// }
// class LastBoss extends Enemy{
//     constructor (name, hp, mp, weapon, attack){
//         super(name, hp, mp, weapon, attack, reborn);
// }

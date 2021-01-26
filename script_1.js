class MilitaryResource {

    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }

    isReadyToMove() {
        return (this.health === this.maxHealth);
    }
    isReadyToFight() {
        return (this.distance <= this.maxDistance);
    }
    restore() {
        this.health = this.maxHealth;   
        this.distance = this.maxDistance;
    }
    clone()  {
        return Object.assign({}, this);
    }
    useHealth(deltaHealth) {
        this.health = this.health - deltaHealth;
    }
    retreat(deltaDistance) {
        this.health = this.distance + deltaDistance;
    }
    
}

module.exports = MilitaryResource;

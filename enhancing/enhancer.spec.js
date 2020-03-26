const enhancer = require('./enhancer.js')
// test away!

// ITEMS
const shield = {
  name: 'Hyrule Shield',
  durability: 99,
  enhancement: 17
}

const sword = {
  name: 'Hyrule Sword',
  durability: 62,
  enhancement: 13
}

const ocarina = {
  name: 'Ocarina Of Time',
  durability: 100,
  enhancement: 15
}

// <------ REPAIR -------->
describe('repairing item', () => {
  it('restores durabilty to 100', () => {
    const repair = enhancer.repair(shield)
    expect(repair.durability).toBe(100)
  })
  it('fail case', () => {
    const failedRepaired = enhancer.repair(shield)
    expect(failedRepaired.durability).not.toBe(99)
  })
})

//  When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

// <------ SUCCEED ------->
describe('item enhancement success', () => {
  it('increases enhancement by 1 if enhancement > 20', () => {
    const success = enhancer.succeed(sword)
    expect(success.enhancement).toBe(14)
  })
  it('fail case', () => {
    const failedUnchanged = enhancer.succeed(sword)
    expect(failedUnchanged.enhancement).not.toBe(13)
  })
})

//  When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

// <------ FAILED -------->
describe('item enhancement fail', () => {
  it('decreases durabilty by 5 if enhancement is < 15', () => {
    const unsuccessful = enhancer.fail(ocarina)
    expect(unsuccessful.durability).toBe(90)
  })
  it('decreases durability by 10 if enhancement >= 15', () => {
    const unsuccessful = enhancer.fail(shield)
    expect(unsuccessful.durability).toBe(89)
  })
  it('decreases enhancement by 1 if enhancement > 16', () => {
    const unsuccessful = enhancer.fail(shield)
    expect(unsuccessful.enhancement).toBe(16)
  })
})

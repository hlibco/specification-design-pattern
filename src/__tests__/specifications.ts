import test from 'ava'

import Specification, { AndSpecification, AndNotSpecification, OrSpecification, OrNotSpecification, NotSpecification } from '../specification'

class IsOneSpecification extends Specification {
  public IsSatisfiedBy (candidate) {
    return candidate === 1
  }
}

class IsTwoSpecification extends Specification {
  public IsSatisfiedBy (candidate) {
    return candidate === 2
  }
}

const IsOne = new IsOneSpecification()
const IsTwo = new IsTwoSpecification()

// -- IsSatisfiedBy
test('IsSatisfiedBy', t => {
  t.is(IsOne.IsSatisfiedBy(1), true)
})

// -- And
test('AndSpecification', t => {
  const And = new AndSpecification(IsOne, IsOne)
  t.is(And.IsSatisfiedBy(1), true)
})

test('AndSpecification', t => {
  const And = new AndSpecification(IsOne, IsTwo)
  t.is(And.IsSatisfiedBy(1), false)
})

test('AndNotSpecification', t => {
  const AndNot = new AndNotSpecification(IsOne, IsOne)
  t.is(AndNot.IsSatisfiedBy(1), false)
})

// -- Or
test('OrSpecification', t => {
  const Or = new OrSpecification(IsOne, IsTwo)
  t.is(Or.IsSatisfiedBy(1), true)
})

test('OrSpecification', t => {
  const Or = new OrSpecification(IsOne, IsTwo)
  t.is(Or.IsSatisfiedBy(2), true)
})

test('OrSpecification', t => {
  const Or = new OrSpecification(IsOne, IsTwo)
  t.is(Or.IsSatisfiedBy(3), false)
})

// -- OrNot
test('OrNotSpecification', t => {
  const OrNot = new OrNotSpecification(IsOne, IsTwo)
  t.is(OrNot.IsSatisfiedBy(1), true)
})

test('OrNotSpecification', t => {
  const OrNot = new OrNotSpecification(IsOne, IsTwo)
  t.is(OrNot.IsSatisfiedBy(2), false)
})

// -- Not
test('NotSpecification', t => {
  const Not = new NotSpecification(IsOne)
  t.is(Not.IsSatisfiedBy(2), true)
})

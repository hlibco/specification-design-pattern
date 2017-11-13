import Specification from './specification'

class NumericSpecification extends Specification {
  public IsSatisfiedBy (candidate) {
    console.log('running NumericSpecification...')
    return typeof candidate === 'number'
  }
}

class IntegerSpecification extends Specification {
  public IsSatisfiedBy (candidate) {
    console.log('>> Running IntegerSpecification...')
    return parseInt(candidate, 0) === candidate
  }
}

class PositiveSpecification extends Specification {
  IsSatisfiedBy (candidate) {
    console.log('>> Running PositiveSpecification...')
    return Number(candidate) > 0
  }
}

class IsZeroSpecification extends Specification {
  public IsSatisfiedBy (candidate) {
    console.log('>> Running IsZeroSpecification...')
    return candidate === 0
  }
}

class IsNineSpecification extends Specification {
  public IsSatisfiedBy (candidate) {
    console.log('>> Running IsNineSpecification...')
    return candidate === 9
  }
}

const IsZero = new IsZeroSpecification()
const Numeric = new NumericSpecification()
const Integer = new IntegerSpecification()
const Positive = new PositiveSpecification()
const IsNine = new IsNineSpecification()

// Compose specification
console.log('\nStart Program')
const calculateScore = Positive.And(Integer).And(Numeric).AndNot(IsZero).And(IsNine.Not())

// Return specification result
const candidate = -9
console.log(`Is Satisfied By ${candidate}: `, calculateScore.IsSatisfiedBy(candidate))

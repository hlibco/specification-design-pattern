import ISpecification from './interfaces/specification'

export default abstract class Specification implements ISpecification {
  public IsSatisfiedBy (candidate): boolean {
    return candidate.IsSatisfiedBy(candidate)
  }

  public And (candidate: ISpecification): ISpecification {
    return new AndSpecification(this, candidate)
  }

  public AndNot (candidate: ISpecification): ISpecification {
    return new AndNotSpecification(this, candidate)
  }

  public Or (candidate: ISpecification): ISpecification {
    return new OrSpecification(this, candidate)
  }

  public OrNot (candidate: ISpecification): ISpecification {
    return new OrNotSpecification(this, candidate)
  }

  public Not (): ISpecification {
    return new NotSpecification(this)
  }
}

export class AndSpecification extends Specification {
  private a: ISpecification
  private b: ISpecification

  constructor (a: ISpecification, b: ISpecification) {
    super()
    this.a = a
    this.b = b
  }

  IsSatisfiedBy (candidate): boolean {
    return this.a.IsSatisfiedBy(candidate) && this.b.IsSatisfiedBy(candidate)
  }
}

export class AndNotSpecification extends Specification {
  public a: ISpecification
  public b: ISpecification

  constructor (a: ISpecification, b: ISpecification) {
    super()
    this.a = a
    this.b = b
  }

  public IsSatisfiedBy (candidate) {
    return this.a.IsSatisfiedBy(candidate) && !this.b.IsSatisfiedBy(candidate)
  }
}

export class OrSpecification extends Specification {
  private a: ISpecification
  private b: ISpecification

  constructor (a: ISpecification, b: ISpecification) {
    super()
    this.a = a
    this.b = b
  }

  public IsSatisfiedBy (candidate) {
    return this.a.IsSatisfiedBy(candidate) || this.b.IsSatisfiedBy(candidate)
  }
}

export class OrNotSpecification extends Specification {
  private a: ISpecification
  private b: ISpecification

  constructor (a: ISpecification, b: ISpecification) {
    super()
    this.a = a
    this.b = b
  }

  public IsSatisfiedBy (candidate) {
    return this.a.IsSatisfiedBy(candidate) || !this.b.IsSatisfiedBy(candidate)
  }
}

export class NotSpecification extends Specification {
  private wrapper: ISpecification

  constructor (wrapper) {
    super()
    this.wrapper = wrapper
  }

  public IsSatisfiedBy (candidate) {
    return !this.wrapper.IsSatisfiedBy(candidate)
  }
}

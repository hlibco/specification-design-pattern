export default interface ISpecification {
  IsSatisfiedBy: Function
  And: Function
  AndNot: Function
  Or: Function
  OrNot: Function
  Not: Function
}

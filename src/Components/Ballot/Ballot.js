import BallotCategories from "../BallotCategories/BallotCategories";

const Ballot = ({ ballot, moveSelections }) => {
  const showBallot = (ballot) => {
    return ballot.map(categories => {
      return <BallotCategories key={categories.id} ballot={categories} moveSelections={moveSelections} />
    });
  };

  return (
    <>
      {showBallot(ballot)}
    </>
  )
}

export default Ballot;
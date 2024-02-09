import { useParams } from "react-router-dom";
import articlesApi from "../../Utils/bluedit-api";
import { useState } from "react";
function VoteButton (props){
    const {articleCard} = props
    const {article_id}= useParams()
    const [votes, setVotes] = useState(0);
    const handleVote = (e) => {
        e.preventDefault();
        setVotes((currentVotes) => {
          return currentVotes + 1;
        });
        articlesApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
      };
    return(
        <button onClick={handleVote}>
        Vote
        {votes + articleCard.votes}
      </button>
    )

}
export default VoteButton
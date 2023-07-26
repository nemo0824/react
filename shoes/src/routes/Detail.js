import { useParams } from "react-router-dom";


function Detail(props){

    let {id} = useParams();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + '/nikeshoes1.jpg'}width="100%" height="60%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div> 
    )
}

export default Detail;
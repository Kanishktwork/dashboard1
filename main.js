import "./main.css"
import hello from "../../assets/hello.svg"
import chart from "../charts/chart"

const main= () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello, koder</h1>
                        <p>Here's your dashboard</p>
                    </div>
                </div>

                <div className="main_cards">

                    <div className="card">
                        <i classname="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of visitors</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i classname="fa fa-calender fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of watching</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i classname="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of likes</p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>


                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Users Overview</h1>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Status Reports</h1>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Subscribers</h1>
                                <p>5472</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </main>
    )
}
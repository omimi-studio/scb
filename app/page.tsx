import Image from "next/image";
import bnb from "../images/icon-3.svg";
import logo from "../images/logo.png";
import swap1 from "../images/swap-1.svg";
import swap2 from "../images/swap-2.svg";
import swap6 from "../images/swap-6.svg";
import icon11 from "../images/icon-11.png";
import icon15 from "../images/icon-15.png";
import icon16 from "../images/icon-16.png";
import icon17 from "../images/icon-17.png";
import icon18 from "../images/icon-18.png";
import icon19 from "../images/icon-19.png";

export default function Home() {
  return (
    <main className="">
      <div className="bg-image dashboard">
        <div className="main">
          <header>
            <div className="container">
              <div className="row">
                <nav className="navbar navbar-expand-md w-100">
                  {/* <!-- Brand --> */}
                  <a className="navbar-brand" href="#">
                    <Image
                      width={80}
                      height={50}
                      src={logo}
                      alt=""
                      className="img-fluid"
                    />
                  </a>

                  {/* <!-- Toggler/collapsibe Button --> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  {/* <!-- Navbar links --> */}
                  <div
                    className="navbar-collapse"
                    id="collapsibleNavbar"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          My Account
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Setting
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <div className="container">
            <div className="swap-block">
              <div className="top-bg">
                <div className="text-a">Deposit</div>
                <div className="text-b">Deposit BUSD to your SCB Wallet</div>
                <div className="text-c">
                  <a href="#" className="icon-link">
                    <Image width={20} height={20} src={swap1} alt="" />
                  </a>
                  <a href="#" className="icon-link">
                    <Image width={20} height={20} src={swap2} alt="" />
                  </a>
                </div>
              </div>
              <div className="area">
                <div className="block-a">
                  <div className="row align-items-center">
                    <div className=" col-auto">
                      <span className="icon-a p-2">
                        <Image width={40} height={40} src={bnb} alt="" />
                      </span>
                      <div
                        className="select"
                        data-toggle="modal"
                        data-target="#selectToken"
                      >
                        BNB
                      </div>
                    </div>
                    <div className="col">
                      <div className="bal-text">Balance: 0.1478542</div>
                    </div>
                  </div>
                  <div className="text-msg">
                    <textarea>0.0</textarea>
                    <div className="av-row"></div>
                  </div>
                </div>
                {/* <div className="down-arrow">
                            <span className="icon">
                                <Image width={40} height={40} src="../images/swap-5.svg" alt="" />
                            </span>
                        </div>
                        <div className="block-b">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="icon-a"><Image width={40} height={40} src="../images/icon-3.svg" alt="" /></span>
                                    <select className="select">
                                        <option>GEMS</option>
                                        <option>GEMS</option>
                                        <option>GEMS</option>
                                    </select>
                                    <span className="icon-b"><Image width={40} height={40} src="../images/swap-3.svg" alt="" /></span>
                                    <span className="icon-b"><Image width={40} height={40} src="../images/swap-4.svg" alt="" /></span>
                                </div>
                                <div className="col">
                                    <div className="bal-text">Balance: 0</div>
                                </div>
                            </div>
                            <div className="text-msg">
                                <textarea>0.0</textarea>
                            </div>
                        </div>*/}
                <div className="block-c">
                  Minimum Received: <strong> 20.9147 BUSD</strong>
                  <br />
                  <strong className="bb">WBNB &gt; SCB &gt; BUSD</strong>
                </div>
                <button className="btn btn-primary btn-md">Deposit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal select-token" id="selectToken">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="top-bg">Select A Token</div>
            <span className="close" data-dismiss="modal">
              <Image width={20} height={20} src={swap6} alt="" />
            </span>
            <div className="modal-body">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search name or paste address"
                  name=""
                />
              </div>

              <ul className="item-list">
                <li className="select">
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon11} alt="" />
                    </div>
                    <div className="col">
                      <strong>BNB</strong>
                      <br />
                      Binance Chain Native Token
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon15} alt="" />
                    </div>
                    <div className="col">
                      <strong>SCB</strong>
                      <br />
                      Added by user + Seismic CB
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon15} alt="" />
                    </div>
                    <div className="col">
                      <strong>BPAY</strong>
                      <br />
                      BPAY Network
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon16} alt="" />
                    </div>
                    <div className="col">
                      <strong>ACH</strong>
                      <br />
                      Alchemy Token
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon17} alt="" />
                    </div>
                    <div className="col">
                      <strong>ADA</strong>
                      <br />
                      Cardano Token
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon18} alt="" />
                    </div>
                    <div className="col">
                      <strong>ADX</strong>
                      <br />
                      AdEX Network
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <Image width={40} height={40} src={icon19} alt="" />
                    </div>
                    <div className="col">
                      <strong>EUR</strong>
                      <br />
                      agEUR
                    </div>
                    <div className="col-auto">
                      <strong>0.1475</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bottom-bg">Manage Tokens</div>
          </div>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </main>
  );
}

import React, { useCallback, useEffect, useState } from 'react'
import {
  withRouter
} from 'react-router-dom';
import Chart from "react-apexcharts";
import './profile-home.css'
import axios from 'axios';
import { getCooies } from '../../../../../middleware/authcheck';
export const ProfileHome = () => {
  const users = localStorage.getItem('user');
  const token = getCooies('authorization');
  const pasrseUser = JSON.parse(users);
  const [allUser, setAlluser] = useState([]);
  const  [allInstitute,setInstitute]=useState([])

  const allUserget = useCallback(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/all`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      setAlluser(res.data.result);
    })
  }, [token])
  const allInstituteget = useCallback(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/institute/all`).then(res => {
      setInstitute(res.data.result);
    })
  },[])

  const FilterUser = (userType) => {
    const countUser = allUser.filter(all => all.roleId === userType);
    return countUser.length
  }

  useEffect(() => {
    allInstituteget();
    allUserget();
  }, [allInstituteget,allUserget]);

  const charts = {

    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },


  };


  return (

    <div style={{ width: "100%" }}>
      <div className="main__title">
        <img src="/assets/images/hello.svg" alt="" />
        <div className="main__greeting">
          <h1>Hello {pasrseUser.username.charAt(0).toUpperCase() + pasrseUser.username.slice(1)}</h1>
          <p>Welcome to your profile</p>
        </div>
      </div>


      <div className="col-md-12 col-sm-12" style={{ padding: 0 }}>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card ">
              <i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Number of Institute</p>
                <span className="font-bold text-title">{allInstitute.length}</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card ">
              <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
              <div className="card_inner">
                <p className="text-primary-p">Number Of Teacher</p>
                <span className="font-bold text-title">{FilterUser(4)}</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <i
                className="fa fa-video-camera fa-2x text-yellow"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Number of Student</p>
                <span className="font-bold text-title">{FilterUser(2)}</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card ">
              <i
                className="fa fa-thumbs-up fa-2x text-green"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Total User</p>
                <span className="font-bold text-title">{allUser.length > 0 ? allUser.length : 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12" style={{ padding: 0, marginTop: '30px' }}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div className="mixed-chart">
                <Chart
                  options={charts.options}
                  series={charts.series}
                  type="bar"
                  width="100%"
                  height="300"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div className="col-12 col-md-12">
                <div className="row">
                  <div className="col-6 col-md-6 col-sm-6  states">
                    <div className="card1 ">
                      <h1>Income</h1>
                      <p>$75,300</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-6 col-sm-6  states">
                    <div className="card2 ">
                      <h1>Sales</h1>
                      <p>$124,200</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-6 col-sm-6  states">
                    <div className="card3 ">
                      <h1>Users</h1>
                      <p>3900</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-6 col-sm-6  states">
                    <div className="card4">
                      <h1>Orders</h1>
                      <p>1881</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ProfileHome);
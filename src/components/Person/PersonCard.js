import React, { Component } from 'react';

const HERONODE_ENDPOINT = process.env.HERONODE_ENDPOINT || 'localhost';
const preFix = `http://${HERONODE_ENDPOINT}/_/ipfs/files/`;

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, addressQRCode, address } = this.props;
    return (
      <div className="person-card">
        <div className="avatar-wrap">
          <img alt="" src={data.avatar ? preFix + data.avatar : ''} />
        </div>
        <div className="profile-content">
          <div className="profile-name">
            {data.nickName}
            <a className="tipping">
              打赏
              <div className="tipping-address">
                <img src={addressQRCode} />
                <p>钱包地址:</p>
                <p> {address}</p>
              </div>
            </a>
            <a className="tipping profile-qrcode">
              微信二维码
              <div className="qr-address">
                {data.wechatQr ? (
                  <img src={preFix + data.wechatQr} />
                ) : (
                  '暂未设置'
                )}
              </div>
            </a>
          </div>
          <div className="profile-intro">
            <span>简介</span>
            <a>{data.intro}</a>
          </div>
          <div className="profile-social">
            <span>社区</span>
            <a>{data.socials}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;

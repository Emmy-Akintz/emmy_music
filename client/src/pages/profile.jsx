import React from 'react'

function profile() {
  return (
    <div className=''>
      <h1>Display your spotify profile data</h1>

      <section id="profile">
        <h2>Logged in as <span id="displayName"></span></h2>
        <span id="avatar"></span>
        <ul>
          <li>User ID: <span id="id"></span></li>
          <li>Email: <span id="email"></span></li>
          <li>Spotify URI: <a href="#" id="uri"></a></li>
          <li>Link: <a href="#" id="url"></a></li>
          <li>Profile Image: <span id="imgUrl"></span></li>
        </ul>
      </section>
    </div>
  )
}

export default profile
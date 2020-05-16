import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const OFFICE_QUERY = gql`
{
  allOffices{
    _id,
    title,
    email,
    address,
    image_url
  }
}
`

export default function Offices() {

    const { loading, error, data } = useQuery(OFFICE_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return (
        <>
           {data.allOffices.map(office => {
               return (
                <div class="contact-div">
                      <img src={office.image_url} />
                      <div class="contact-content-wrapper">
                          <div class="contact-content">
                                <div class="contact-head">{office.title}</div>
                                <div class="contact-email">
                                    <div class="con-email">Email:</div>
                                    <div class="email-address">{office.email}</div>
                                </div>
                                <div class="contact-address">
                                    <div class="con-address">Address:</div>
                                    <div class="address-info">{office.address}</div>
                                </div>
                          </div>
                      </div>
                  </div>
              )}
           )}
        </>
    );
}

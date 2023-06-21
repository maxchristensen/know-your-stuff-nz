import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StaffMembers = () => {

    const baseUrl = import.meta.env.VITE_WP_API_BASEURL

    const [staff, setStaff] = useState(null)
    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/staff?_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setStaff(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    const AllStaff = ( {staff} ) => {
        const mappedStaff = staff.map((staffmember, index) => {
            function getFeaturedImage(staffmember) {
                if (staffmember && staffmember._embedded && staffmember._embedded['wp:featuredmedia'] && staffmember._embedded['wp:featuredmedia'][0].source_url) {
                    return staffmember._embedded['wp:featuredmedia'][0].source_url;
                } else {
                    return 'https://via.placeholder.com/150';
                }
            }


            const Populate = () => {

                if (index % 2 === 0) {
                    return (
                        <div className="staff-container mb-1" key={staffmember.slug + "-" + index}>
                            <div>
                                <h4 className='title'>{staffmember.title.rendered}</h4>
                                <div dangerouslySetInnerHTML={{__html: staffmember.content?.rendered}} />
                            </div>
                            <div>
                                <img className="staff-image" src={getFeaturedImage(staffmember)} alt="Staff Member Image" />
                            </div>
                        </div>  
                    );
                } else {
                    return (
                        <div className="staff-container mb-1" key={staffmember.slug + "-" + index}>
                            <div className='mr-1'>
                                <img className="staff-image" src={getFeaturedImage(staffmember)} alt="Staff Member Image" />
                            </div>
                            <div>
                                <h4 className='title'>{staffmember.title.rendered}</h4>
                                <div dangerouslySetInnerHTML={{__html: staffmember.content?.rendered}} />
                            </div>
                        </div>
                    );
                }
            };
            
            return (
            <Populate />
            )
        })


        return (
            <>
            <div className="staff-members-container">
            {mappedStaff}
            </div>
            </>
        )
    }


  return (
    <>
    {loading ? <p>Loading...</p> : <AllStaff staff={staff} />}
    </>
  )
}

export default StaffMembers
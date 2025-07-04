import React, {useState}from 'react'

import PropertyType from './PropertyType'
import PropertyRole from './PropertyRole'
import ProofOwnership from './ProofOwnership'
import RealtorVerification from './RealtorVerification'
import CompanyInfo from './CompanyInfo'

const Home = () => {
    const[selectPropertyType, setSelectPropertyType] = useState(null)
    const[selectPropertyRole, setSelectPropertyRole] = useState(null)
  return (
    <div className='m-4'>
        <PropertyType selectPropertyType={selectPropertyType} setSelectPropertyType={setSelectPropertyType}/>
        <PropertyRole selectPropertyRole={selectPropertyRole} setSelectPropertyRole={setSelectPropertyRole}/>
        <ProofOwnership selectPropertyType={selectPropertyType} selectPropertyRole={selectPropertyRole}/>
        <RealtorVerification selectPropertyType={selectPropertyType} selectPropertyRole={selectPropertyRole} />
        <CompanyInfo selectPropertyType={selectPropertyType} selectPropertyRole={selectPropertyRole} />
    </div>
  )
}

export default Home
import React from 'react'
import {Table} from 'react-bootstrap'
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10'>

        <Table borderless responsive="sm" className='text-2xl'>
            <tbody>

                <tr className='flex flex-col md:table'>
                    <td className="px-6 py-4">
                        <span className="flex items-center">
                            <i className="fab fa-js-square mr-2 text-red-500"></i>
                            <span className="font-medium">JavaScript</span>
                        </span>

                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded w-80 bg-white">
                                <div className="w-1/2 bg-red-600"></div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4">
                        <span className="flex items-center">
                            <i className="fab fa-node mr-2 text-red-500"></i>
                            <span className="font-medium">Node.js</span>
                        </span>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded w-80 bg-white">
                                <div className="w-1/4 bg-red-600"></div>
                            </div>
                        </div>
                    </td>

                </tr>

                <tr className='flex flex-col md:table' >
                    <td className="px-6 py-4">
                        <span className="flex items-center">
                            <i className="fab fa-react mr-2 text-red-500"></i>
                            <span className="font-medium">React</span>
                        </span>

                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded w-80 bg-white">
                                <div className="w-3/5 bg-red-600"></div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4">
                        <span className="flex items-center">
                            <i className="fab fa-java mr-2 text-red-500"></i>
                            <span className="font-medium">Java</span>
                        </span>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded w-80 bg-white">
                                <div className="w-3/4 bg-red-600"></div>
                            </div>
                        </div>
                    </td>

                </tr>

                <tr className='flex flex-col md:table'>
                    <td className="px-6 py-4">
                        <span className="flex items-center">
                            <i className="fab fa-python mr-2 text-red-500"></i>
                            <span className="font-medium">Python</span>
                        </span>

                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded w-80 bg-white">
                                <div className="w-1/2 bg-red-600"></div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4">
                        <span className="flex items-center">
                            <i className="fab fa-c mr-2 text-red-500"></i>
                            <span className="font-medium">C/C++</span>
                        </span>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded w-80 bg-white">
                                <div className="w-1/2 bg-red-600"></div>
                            </div>
                        </div>
                    </td>

                </tr>

            </tbody>
        </Table>
    </div>
    
  )
}

export default SectionWrapper(Tech, "");

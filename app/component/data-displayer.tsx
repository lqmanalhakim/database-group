"use client"
import React, { useState } from "react"
import Image from "next/image";
import styles from "./page.module.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { PlusIcon } from 'lucide-react'
import { dataDonationType, dataDonorType, dataReportType, dataVolunteerActivityType, dataVolunteerType } from "../page";

interface IDataDisplayer {
    dataDonor: dataDonorType;
    dataDonation: dataDonationType;
    dataReport: dataReportType;
    dataVolunteer: dataVolunteerType;
    dataVolunteerActivity: dataVolunteerActivityType;
}

export default function DataDisplayer({ dataDonor, dataDonation, dataReport, dataVolunteer, dataVolunteerActivity }: IDataDisplayer) {

    const [showModa, setShowModal] = useState(false)

    const showModal = () => {
        return (
            <div className="bg-white w-[500px] h-[200px] absolute">
                <h5>Testt</h5>
            </div>
        )
    }

    return (
        <div className="bg-black w-screen h-screen px-5 relative">
            {showModa && showModal()}
            <div className="mt-10 w-[800px]">
                <div className="flex flex-row my-4 justify-between">
                    <h4 className="">Donors</h4>
                    <Button variant='outline' size='icon' onClick={() => setShowModal(true)}><PlusIcon className="h-4 w-4" /></Button>
                </div>
                <div className="border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Total donation</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataDonor.map((e) => (
                                <TableRow key={e.DonorID}>
                                    <TableCell>{e.Name}</TableCell>
                                    <TableCell>{e.ContactInfo}</TableCell>
                                    <TableCell>{e.Address}</TableCell>
                                    <TableCell>{e.DonationTotal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="mt-10">
                <h4 className="">Donation</h4>
                <div className="w-[800px] border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Donation date</TableHead>
                                <TableHead>Event name</TableHead>
                                <TableHead>Event Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataDonation.map((e) => (
                                <TableRow key={e.DonorID}>
                                    <TableCell>{e.Donor.Name}</TableCell>
                                    <TableCell>{e.Donor.ContactInfo}</TableCell>
                                    <TableCell>{e.Amount}</TableCell>
                                    <TableCell>{e.DonationDate.toLocaleString()}</TableCell>
                                    <TableCell>{e.Event?.EventName}</TableCell>
                                    <TableCell>{e.Event?.Description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="mt-10">
                <h4 className="">Report</h4>
                <div className="w-auto border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Report Type</TableHead>
                                <TableHead>Generated Date</TableHead>
                                <TableHead>Content</TableHead>
                                <TableHead>Donor Name</TableHead>
                                <TableHead>Donor Email</TableHead>
                                <TableHead>Donation Amount</TableHead>
                                <TableHead>Voulenteer Name</TableHead>
                                <TableHead>Voulenteer Contact Info</TableHead>
                                <TableHead>Voulenteer Skills</TableHead>
                                <TableHead>Activity Date</TableHead>
                                <TableHead>Event Name</TableHead>
                                <TableHead>Event Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataReport.map((e) => (
                                <TableRow key={e.ReportID}>
                                    <TableCell>{e.ReportType}</TableCell>
                                    <TableCell>{e.GeneratedDate.toLocaleString()}</TableCell>
                                    <TableCell>{e.Content}</TableCell>
                                    <TableCell>{e.Donor?.Name}</TableCell>
                                    <TableCell>{e.Donor?.ContactInfo}</TableCell>
                                    <TableCell>{e.Donation?.Amount}</TableCell>
                                    <TableCell>{e.Volunteer?.Name}</TableCell>
                                    <TableCell>{e.Volunteer?.ContactInfo}</TableCell>
                                    <TableCell>{e.Volunteer?.Skills}</TableCell>
                                    <TableCell>{e.VolunteerActivity?.ActivityDate.toLocaleString()}</TableCell>
                                    <TableCell>{e.Event?.EventName}</TableCell>
                                    <TableCell>{e.Event?.Description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="mt-10">
                <h4 className="">Volunteer</h4>
                <div className="w-[800px] border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Skills</TableHead>
                                <TableHead>Availability</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataVolunteer.map((e) => (
                                <TableRow key={e.VolunteerID}>
                                    <TableCell>{e.Name}</TableCell>
                                    <TableCell>{e.ContactInfo}</TableCell>
                                    <TableCell>{e.Skills}</TableCell>
                                    <TableCell>{e.Availability}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="my-10">
                <h4 className="">Volunteer activity</h4>
                <div className="w-[800px] border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Volunteer Name</TableHead>
                                <TableHead>Volunteer Contact Info</TableHead>
                                <TableHead>Event Name</TableHead>
                                <TableHead>Event Description</TableHead>
                                <TableHead>Hours Work</TableHead>
                                <TableHead>Activity Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataVolunteerActivity.map((e) => (
                                <TableRow key={e.ActivityID}>
                                    <TableCell>{e.Volunteer.Name}</TableCell>
                                    <TableCell>{e.Volunteer.ContactInfo}</TableCell>
                                    <TableCell>{e.Event.EventName}</TableCell>
                                    <TableCell>{e.Event.Description}</TableCell>
                                    <TableCell>{e.HoursWorked}</TableCell>
                                    <TableCell>{e.ActivityDate.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
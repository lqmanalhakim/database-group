import prismaClient from "./component/prisma";
import DataDisplayer from "./component/data-displayer";

export const fetchDataDonor = async () => {
  return await prismaClient.donor.findMany()
}

export const fetchDonation = async () => {
  return await prismaClient.donation.findMany({
    include: {
      Donor: {
        select: {
          Name: true,
          ContactInfo: true,
        }
      },
      Event: {
        select: {
          EventName: true,
          Description: true,
        }
      }
    }
  })
}

export const fetchDataReport = async () => {
  return await prismaClient.reports.findMany({
    include: {
      Event: {
        select: {
          EventName: true,
          Description: true,
        }
      },
      Donor: {
        select: {
          Name: true,
          ContactInfo: true,
        }
      },
      Donation: {
        select: {
          Amount: true,
        }
      },
      Volunteer: {
        select: {
          Name: true,
          ContactInfo: true,
          Skills: true,
        }
      },
      VolunteerActivity: {
        select: {
          ActivityDate: true,
        }
      }
    }
  })
}

export const fetchVolunteer = async () => {
  return await prismaClient.volunteer.findMany()
}

export const fetchDataVolunteerActivity = async () => {
  return await prismaClient.volunteerActivities.findMany({
    include: {
      Volunteer: {
        select: {
          Name: true,
          ContactInfo: true,
          Skills: true,
          Availability: true,
        }
      },
      Event: {
        select: {
          EventName: true,
          EventDate: true,
          Location: true,
          Description: true,
        }
      }
    }
  })
}

export type dataDonorType = Awaited<ReturnType<typeof fetchDataDonor>>

export type dataVolunteerActivityType = Awaited<ReturnType<typeof fetchDataVolunteerActivity>>

export type dataVolunteerType = Awaited<ReturnType<typeof fetchVolunteer>>

export type dataReportType = Awaited<ReturnType<typeof fetchDataReport>>

export type dataDonationType = Awaited<ReturnType<typeof fetchDonation>>

export default async function Home() {

  const data = await Promise.all([
    fetchDataDonor(),
    fetchDonation(),
    fetchDataReport(),
    fetchVolunteer(),
    fetchDataVolunteerActivity()
  ])

  return (
    <DataDisplayer dataDonor={data[0]} dataDonation={data[1]} dataReport={data[2]} dataVolunteer={data[3]} dataVolunteerActivity={data[4]} />
  );
}

## Technology Stack
   - REST
   - Swagger

## Individual requirements
- Build Swagger spec based on the details provided below

- Make sure to include appropriate models as part of your Swagger

- Make sure that your Swagger handles error cases for each endpoint as applicable

 
The scheduling API needs to handle accepting the scheduling request and proposing alternatives when scheduling fails. The basic features are outlined here:

A scheduling request must comply with:

Resource availability: Is the resource working that day and do they not have a reservation during the requested time?

Resource maximum scheduling time: We need to make sure the resource has a 30 minute break during the day not more than 6 hours after the start of their shift

Business hours of location: Is the requested location opened?

Holidays: Is the specific location or all locations closed on this day?

The responses to scheduling request must have success or failure with alternative

If the requested resource, location and time are available we add to the schedule and consider it a success

If the requested resource is not available but another resource is at the requested location we respond with a failure and suggested resource change

Example: “John is not available at the NYC location, but Jane is available at the NYC location at the requested date/time”

If the requested location is closed but another is opened, we respond with a failure and suggested location AND resource change

Example: “The Broadway location is closed, but the 6th street location is opened and Jane is available at the requested date/time”

If there are no available locations and resources we suggest a different day/time when the requested location and resource is next available

Example: “There are no locations open / resources available during this date/time. The next available date/time is with Jane at the 6th Street location on 10/15/2018 at 09:00 AM EDT.”

Potential endpoints:

Schedule:

Resource

Location

Time

Date

Cancel:

Schedule ID

CRUD for:

Resources

Work Schedule

Locations

Business hours

Holidays

Potential data model:

Resources:

Name

Primary Location (FK)

Work Schedule (FK)

Email

Location:

Name

Address

Business Hours (FK)

Phone

Work Schedule:

Day

On/Off

Hours

Business Hours:

OpenTime

CloseTime

DaysOfWeek

Holidays:

Name

Date

Holiday-Location:

Location (FK)

Holiday (FK)

 
Submit the following

Swagger API Specification + ERD Diagram

Any other documents to support your API spec & mapping


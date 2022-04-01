export interface PositionInfoType {
  title: string,
  description: string,
  responsibilities: Array<string>,
  requirements: Array<string>

}
export const positionInfo: Array<PositionInfoType> = [
  {
    title: "Licensed Psychotherapist",
    description: "The Cornwell Center for Behavioral Health, Inc. is seeking applicants for a part time (with potential for full time) contract licensed counselor, psychologist, or clinical social worker to provide sex offender assessment and treatment and adult mental health counseling services to adults in a thriving, dynamic, and growing private practice.  The majority of our clientele are court-mandated convicted sexual offenders.  Thus, experience working with sexual offenders and sexual addiction is preferred.  Experience administering/interpreting psychological testing is also preferred, but not required. As a contract position, the therapist is paid per billable services they provide.  While this position does not include paid leave, health insurance or other paid benefits, the compensation percentage is highly competitive and commensurate with experience.  The hours are flexible; however, the successful candidate must be able to work a combination of day and evening hours, excluding weekends and holidays.   The position is part time at present; however, the practice is growing and expanding and there is an opportunity for the position to become full time (still on a contract basis.)  The Cornwell Center, Inc. is a drug free workplace.",
    responsibilities: [
      "Provide group and individual counseling to convicted sexual offenders",
      "Provide group and individual counseling to adults with mental health issues and concerns",
      "Maintain accurate, timely, and confidential clinical records",
      "Work collaboratively with referring agencies including probation officers, attorneys, social services",
      "Be an active member of the treatment team, staffing cases and assisting in clinical decision making of agency clients",
      "Assist with psychological testing and interpretation",
      "Potential to assist with or conduct psychosexual evaluations",
      "Provide case management services as needed to assist clients and maintain community safety",
      "Develop and maintain treatment plans",
      "Establish and maintain positive working relationships with other professionals in the community connected to our clientele",
      "Follow an established behavioral relapse prevention protocol used in this Center in the Sex Offender Treatment Program",
      "Collect payment for services directly from clients",
      "Provide written progress reports on a monthly basis to referring agencies as required"
    ],
    requirements: [
      "Licensed in NC as a Professional Counselor, Psychologist, Psychological Associate, or Clinical Social Worker ",
      "Counseling License must be active and in good standing",
      "Minimum of 3 years of counseling experience in individual and group modalities",
      "Experience working with sexual offenders is highly preferred",
      "Experience in psychological testing is highly preferred",
      "Provide proof of professional liability insurance"
    ]
  }
]

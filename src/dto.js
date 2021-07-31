import data from './mockDb.json'

export const getResumeByID = (id) => {
    if (!data || !data.resumes) {
        console.log("No data returned")
        return 
    }

    const matchingResumes = data.resumes.filter(resume => resume.id == id)
    if (!matchingResumes || !matchingResumes.length || matchingResumes.length <1 ) {
        console.log("No resumes with matching id")
        return
    }

    return matchingResumes[0]
}


export const typeDefs = `#graphql
    type Program {
        id : ID!
        title : String!
        category : String!
        description : String
        productNumber : String
        licenseNumber : String
        validationCode : String
        downloadUrl : String
    }
    type Query {
        programs(query : ProgramQueryInput) : [Program]
        program(id : ID) : Program
    }
    type Mutation { 
        addProgram (program : NewProgramInput) : Program
        removeProgram(id : ID) : Program
    }
    input ProgramQueryInput {
        title : String
        category : String
    }
    input NewProgramInput {
        title : String!
        category : String!
        description : String
        productNumber : String
        licenseNumber : String
        validationCode : String
        downloadUrl : String!
    }
`;

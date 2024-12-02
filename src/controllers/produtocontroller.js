const{PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient();

async function  criarproduto(dados){
    try{
        return await prisma.produtos.create({
            data:dados
        })

        } catch (error) {
            return {
                severity: 'error',
                detail: error.message
            }
        }
    }

    module.exports = {
        criarproduto 
    }

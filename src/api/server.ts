let token = `64a46e5b48b1cd81caf4a9ba568b3ef3e3203e31c2d25816`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-tm.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://drone-inventory-tm.herokuapp.com/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create data from server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://drone-inventory-tm.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to UPDATE data from server')
        }

        return await response.json()
    },

    delete: async (id:string ) => {
        const response = await fetch(`https://drone-inventory-tm.herokuapp.com/api/drones${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
            
        });

        
    }
}
import React from 'react'
import Select from '../Select'
import Botton from '../Botton'
import { useNavigate } from 'react-router-dom'
import  {appwriteService} from '../index'

function postForm({post}) {

    const navigate = useNavigate()
    const {  register , handleSubmit , setValue , control , getValues } = React.useForm({
        defaultValue : {
            title: post? post.title : "" , 
            slug : slug? post.slug : "" , 
            image : post? post.image : null , 
            status: post?.status || "active",
        }
    })

    const submit = async ( data ) => {

        if( post ){
            
            const file = data.image[0] ? appwriteService.uploadFile(data.images[0]) : null ; 
            if( file ) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbpost = await appwriteService.updatePost( post.$id , {
                ...data , 
                featuredImage : file ? file.$id  : undefined
            } )
            if( dbpost ) {
                navigate(`/post/${dbpost.$id}`)
            }
        } else {

            const file = data.image[0] ? appwriteService.uploadFile(data.images[0]) : undefined ;   
            if( file ){

                const id = file.$id 
                data.featuredImage = id 

            }
        }

    }

   



  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
       <Input 
        label="title" 
        type="text"
        className="mb-4"
        { ...register("title" , {
            required : true
        } ) }
       />
       <Input 
        lable="slug"
        type="text"
        className="mb-4"
        {...register( "slug" , {
            required : true  
        } ) }
       />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">

        <Input 
        lable="feturedImage"
        type="file"
        className="mb-4"
        { ...register("image" , {
            required: !post
        }  ) }
        />
        {  
            post && 
            (<div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>)
        }
        
        <Select 
        option ={ ["active" , "inactive" ] }
        lable="status"
         className="mb-4"
         { ...register( "status" , {
            required : true 
         } ) }
        />

                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
       
    </div>
</form>
  )
}

export default postForm


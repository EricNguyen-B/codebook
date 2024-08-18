using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using codebookApi.models;

namespace codebookApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FileSystemController : ControllerBase
    {
        private List<Folder> folders = new List<Folder>();

        // CREATE 
        [HttpPost("add/{id}")]
        public void addFolder(long id, Folder folder)
        {
            if (id != folder.id)
            {
                return BadRequest();
            }
        }

        // READ
        [HttpGet("get/{id}")]
        public Folder getFolder(long id)
        {

        }


        [HttpGet("filename")]
        public string getFileName()
        {
            return "File Name";
        }


    }
}
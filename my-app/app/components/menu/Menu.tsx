//primero se indica si sera un componente de front o de back
'use client'
//luego se declaran los imports
import { Dropdown, Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import { RxPerson } from "react-icons/rx";

//se declaran listas,catalogos y/o variables que son constantes en todo el proceso
const catalogoSubmenu = [
  {
    title: "Usuarios",
    href: "/usuarios",
    type: "item",
  },
  {
    title: "Categorías",
    href: "/categorias",
    type: "item",
  },
  {
    title: "Dependencias",
    href: "/dependencias",
    type: "item",
  },
  {
    title: "Bancos",
    href: "/bancos",
    type: "item",
  },
  {
    title: "Pagadurias",
    href: "/pagadurias",
    type: "item",
  },
  {
    title: "UMA",
    href: "/uma",
    type: "item",
  },
  {
    title: "Salarios Mínimos",
    href: "/salarios-minimos",
    type: "item",
  },
];

const menuOptions = [
  {
    title: "Pensiones",
    href: "/",
    type: "link",
  },
  {
    title: "Catálogos",
    href: "#",
    type: "dropdown",
    options: catalogoSubmenu,
  },
  {
    title: "Configuraciones",
    href: "/configuraciones",
    type: "link",
  },
  {
    title: "Reportes",
    href: "/reportes",
    type: "link",
  },
  {
    title: "Bitácora",
    href: "/bitacora",
    type: "link",
  },
];


//de declara el componente funcional para mostrar el menu en la parte superior
export  function Menu(){//el nombre tiene que iniciar en Mayuscula y debe ser CamelCase !!!!!!!

    //const router = useRouter();//vamos a usar el NextRouter para redirigir el navegador

    return(//retorna un elemento JSX | (permite escribir código similar al HTML dentro de un archivo JavaScript)
        <>
            <Navbar className="shadow-md py-4">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-lg font-semibold text-gray-600 dark:text-white">
          <span className="hidden md:inline-block">Sistema de</span>{" "}
          Prestaciones y Aportaciones
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<RxPerson className="w-6 h-6 my-2 mr-4" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">  Nombre de usuario  </span>
            <span className="block truncate text-sm font-medium">
              Correo o datos para descripcion
            </span>
          </Dropdown.Header>
          <Dropdown.Item >
            Ir a perfil
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Cerrar sesión</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        {/* Catálogos para móviles */}
        <div className="md:hidden">
          {catalogoSubmenu.map((item, index) => {
            return (
              <Navbar.Link
                key={`mobile-catalogos-${item.type}-${item.title}-${item.href}-${index}`}
                href={item.href}
                className="text-gray-600 w-full"
              >
                {item.title}
              </Navbar.Link>
            );
          })}
        </div>
        {/* Menú para tablets/escritorio */}
        {menuOptions.map((item, index) => {
          switch (item.type) {
            case "dropdown":
              return (
                <div
                  className="hidden md:flex"
                  key={`${item.type}-${item.title}-${item.href}-${index}`}
                >
                  <Dropdown inline={true} label={item.title}>
                    {item?.options &&
                      item.options.map((dropItem, i) => {
                        return (
                          <Dropdown.Item
                            key={`item-${item.type}-${item.title}-${i}`}
                            className="hidden md:flex"
                          >
                            {dropItem.title}
                          </Dropdown.Item>
                        );
                      })}
                  </Dropdown>
                </div>
              );

            case "link":
            default:
              return (
                <Navbar.Link
                  key={`link-${item.type}-${item.title}-${item.href}-${index}`}
                  href={item.href}
                  active={false}
                  className="text-gray-600 w-full"
                >
                  {item.title}
                </Navbar.Link>
              );
          }
        })}

        {/* Elementos visibles en móviles */}
        <Navbar.Link href="/perfil" className="text-gray-600 w-full md:hidden">
          Mi perfil
        </Navbar.Link>
        <Navbar.Link
          
          className="text-gray-600 w-full md:hidden"
        >
          Cerrar sesión
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
        </>
    )

};
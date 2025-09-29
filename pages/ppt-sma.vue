<template>
    <div :class="['ppt-sma', { 'focus-mode': isFocusMode }]">
        <header class="header" :class="{ shadow: scrolled }">
            <div class="container nav-container">
                <nav class="nav" aria-label="Navegación principal" v-show="!isFocusMode">
                    <a v-for="item in navItems" :key="item.href" :href="item.href" class="nav-link">{{ item.label }}</a>
                </nav>
                <div class="nav-ctas" v-show="!isFocusMode">
                </div>
            </div>
        </header>

        <main class="main">
            <!-- Hero -->
            <section id="home" class="section hero">
                <div class="container">
                    <h1>
                        <NuxtImg class="center" src="images/logo-sped.png" alt="SPED" />
                    </h1>
                    <h4 class="title2">SaaS para gestión de información en clientes salmoneros</h4>
                </div>
            </section>



            <!-- Mi rol -->
            <section id="rol" class="section">
                <div class="container">
                    <h2 class="h2">Mi rol</h2>
                    <ul class="bullets">
                        <li>Lideré el diseño técnico y participé activamente en el desarrollo práctico del sistema.</li>
                        <li>Definí dominios y diseñé los contratos de comunicación entre APIs.</li>
                        <li>Coordine la implementacions de los pipelines de CI/CD con construcción multi-stage,
                            versionado por SHA y despliegues
                            automatizados.</li>
                        <li>Elaboré guías de buenas prácticas y realicé revisiones de código (PR reviews).</li>
                        <li>Aseguré la calidad, escalabilidad y mantenibilidad en todas las etapas del ciclo de vida del
                            software.</li>
                    </ul>
                </div>
            </section>

            <!-- Problema → Solución -->
            <section id="problema" class="section">
                <div class="container">
                    <h2 class="h2">Problema → Solución</h2>
                    <div class="two-col">
                        <p>SPED es un sistema que integra en una sola plataforma tanto el cumplimiento
                            normativo como la gestión de los datos operacionales que antes se llevaban en Excel o por
                            correo. Permite centralizar procesos como el control de combustible, la entrega de EPP, el
                            seguimiento de ciclos productivos, la mantención de generadores, el registro de fuentes de
                            generación de energía, el control de residuos y la gestión documental. Con ello, unifica la
                            información, estandariza flujos y asegura trazabilidad total, registrando cada acción con
                            identidad y sello temporal para dar confianza, eficiencia y transparencia en toda la
                            operación.
                        </p>
                        <NuxtImg class="illustration" src="images/sistema.png" alt="Sistema" />
                    </div>
                </div>
            </section>


            <!-- Stack -->
            <section id="stack" class="section">
                <div class="container">
                    <h2 class="h2">Stack</h2>
                    <div class="pills">
                        <span v-for="pill in stackPills" :key="pill" class="pill">
                            <Icon :name="iconFor(pill)" :size="18" />
                            <span style="margin-left:6px;">{{ pill }}</span>
                        </span>
                    </div>
                </div>
            </section>


            <!-- Arquitectura -->
            <section id="arquitectura" class="section">
                <div class="container">
                    <h2 class="h2">Arquitectura</h2>
                    <pre class="mono">
Sistema
       ├─ Frontend (SPA, Node.js)
       │    ├─ Módulos por dominio
       │    ├─ Redux Toolkit + RTK Query
       │    └─ Carpetas separadas (features/, shared/, ui/)
       │
       ├─ APIs (FastAPI, Python)
       │    ├─ Repositorios independientes por API
       │    │    ├─ Archivos por API
       │    │    ├─ Routes
       │    │    │    ├─ Lógica de negocio
       │    │    │    │    ├─ endpoint.py
       │    │    │    │    ├─ models.py
       │    │    │    │    └─ rules.py
       │    └─ CI/CD por servicio (GitHub Actions)
       └─ API Gateway (Nginx/FastAPI)

MongoDB · Redis · RabbitMQ · Nginx
                    </pre> 
                    <NuxtImg class="arch-figure" src="images/crud.png" alt="crud" />
                </div>
            </section>

            <!-- APIs -->
            <section id="apis" class="section">
                <div class="container">
                    <h2 class="h2">APIs</h2>
                    <div class="grid repos">
                        <div class="card">
                            <h3 class="h3">Frontend/JS</h3>
                            <ul class="bullets">
                                <li v-for="repo in frontendRepos" :key="repo"><span style="margin-left:6px;">{{ repo
                                        }}</span></li>
                            </ul>
                        </div>
                        <div class="card">
                            <h3 class="h3">APIs/Python</h3>
                            <ul class="bullets">
                                <li v-for="api in pythonApis" :key="api"><span style="margin-left:6px;">{{ api }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <!-- Resultados -->
            <section id="resultados" class="section">
                <div class="container">
                    <h2 class="h2">Resultados</h2>
                    <div class="grid">
                        <div class="card result">
                            <div class="result-value">5 minutos</div>
                            <div class="result-label">Creación de API base</div>
                        </div>
                        <div class="card result">
                            <div class="result-value">30 minutos</div>
                            <div class="result-label">Implmentación de lógica de negocio</div>
                        </div>
                        <div class="card result">
                            <div class="result-value">1 hora</div>
                            <div class="result-label">Construcción de CRUD con interfaz y tests</div>
                        </div>
                    </div>
                    <p class="caption">Métricas representativas del comportamiento en producción.</p>
                </div>
            </section>



            <!-- Dashboard -->
            <section id="dashboard" class="section">
                <div class="container">
                    <h2 class="h2">Dashboard Variables Ambientales</h2>
                    <video class="card video-player" controls preload="metadata" playsinline autoplay muted
                        aria-label="Video variables ambientales">
                        <source src="/videos/dashboard.mp4" type="video/mp4" />
                        Tu navegador no soporta la reproducción de video.
                    </video>
                </div>
            </section>

            <section id="code" class="section">
                <div class="container">
                    <h2 class="h2">CRUD base (resumen)</h2>
                    <pre class="mono">from fastapi import HTTPException
from bson import ObjectId


class CRUD:
    def create(self, data): ...
    def read(self, query, pipeline=None): ...
    def read_all(self, query, skip=0, limit=20, sort=None, pipeline=None): ...
    def update(self, query, data): ...
    def delete(self, query): ...

    # helpers: _parse_id(), _pipeline_user_info()
                    </pre>
                    <details class="code-details">
                        <summary>Ver versión completa (extendida)</summary>
                        <pre class="mono">
import datetime
from bson import ObjectId
from fastapi import HTTPException, status
import re

from src.database import db
from src.config import PREFIX


class CRUD:
    def __init__(self, collection, relations=[]):
        self.collection = PREFIX + "_" + collection
        self.db = db[PREFIX + "_" + collection]
        self.relations = relations
        # self.project = {}

    def create(self, data):
        try:
            # Añadir explícitamente el campo disable con su valor por defecto
            data["disable"] = False
            result = self.db.insert_one(data)
            created_document = self.read({"_id": result.inserted_id})

            if not created_document:
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Error occurred while fetching created document",
                )

            return created_document
        except Exception as e:
            print(e)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error occurred while creating document",
            )

    def read(self, query, additional_pipeline=None):
        try:
            query = self._parse_query_id(query)
            if "disable" in query:
                query["disable"] = False
            aggregation_maked = self._make_aggregation()

            # Pipeline to join the 'users' collection based on 'creation_user/modification_user' fields.
            user_info_pipeline = self.get_pipeline_user_info()

            filter_aggregate = [{"$match": query}]

            # Project stage to exclude creation_user field
            project_stage = {
                "$project": {
                    "creation_user": 0  # Exclude the creation_user field from the output
                }
            }

            # Add lookup stage to the aggregation pipeline
            if aggregation_maked:
                aggregation_pipeline = [
                    *filter_aggregate,
                    *user_info_pipeline,
                    project_stage,
                    *aggregation_maked,
                ]
            else:
                aggregation_pipeline = [*filter_aggregate, *user_info_pipeline]
            
            if additional_pipeline:
                aggregation_pipeline = aggregation_pipeline + additional_pipeline

            result = list(self.db.aggregate(aggregation_pipeline))

            if result:
                result = result[0] if result else None
            # else:
            #     raise HTTPException(
            #         status_code=status.HTTP_404_NOT_FOUND, detail="Document not found"
            #     )

            return result
        except HTTPException:
            raise
        except Exception as e:
            print("Error:", e)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error occurred while reading document",
            )

    def read_all(self, query, skip, limit, sort_field=None, sort_order=1, additional_pipeline=None):
        try:
            # query = self._parse_query_id(query)
            query["disable"] = False

            # Pipeline to join the 'users' collection based on 'creation_user/modification_user' fields.
            user_info_pipeline = self.get_pipeline_user_info()

            # Apply initial filter
            match_stage = {"$match": query}

            # Project stage to exclude creation_user field
            project_stage = {
                "$project": {
                    "creation_user": 0  # Exclude the creation_user field from the output
                }
            }

            # Define the complete aggregation pipeline
            aggregation_pipeline = [
                *user_info_pipeline,
                project_stage
            ]

            if self._make_aggregation():
                # Append custom aggregation stages if any
                aggregation_pipeline.extend(self._make_aggregation())
            
            if additional_pipeline:
                aggregation_pipeline = aggregation_pipeline + additional_pipeline
            aggregation_pipeline.append(match_stage)

            # Add sort stage if sort_field is provided
            if sort_field:
                sort_stage = {"$sort": {sort_field: sort_order}}
                aggregation_pipeline.append(sort_stage)                
            if skip:
                skip_stage = {"$skip": skip}
                aggregation_pipeline.append(skip_stage)
            if limit:
                limit_stage = {"$limit": limit}
                aggregation_pipeline.append(limit_stage)

            # Apply collation for case and accent insensitive sorting
            collation = {
                "locale": "es",  # Spanish locale
                "strength": 1,  # 1: primary level, ignores diacritics (accents)
            } 
            results = list(self.db.aggregate(aggregation_pipeline, collation=collation))
            return results
        except Exception as e:
            print("Error:", e)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error occurred while reading documents",
            )
    
    def read_query(self, query):
        try:
            pipeline = self._make_aggregation_query(query)
            count_pipeline = self._make_count_aggregation_query(query)

            result = list(self.db.aggregate([{
                "$facet": {
                    "data": pipeline,
                    "meta": count_pipeline
                }
            }]))[0]

            return {
                "data": result["data"],
                "meta": result["meta"][0] if result["meta"] else {"totalCount": 0}
            }
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=str(e),
            )

    def update(self, query, data):
        try:
            query = self._parse_query_id(query)
            existing_doc = self.read(query)

            if existing_doc.get("disable"):
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="Cannot update a disabled document",
                )

            result = self.db.update_one(query, {"$set": data})

            # if result.modified_count:
            #     for relation in self.relations:
            #         db[relation].update_many(
            #             {self.collection: existing_doc["_id"]},
            #             {"$set": data}
            #         )

            # Get document with aggregation to get all data related
            aggregation_maked = self._make_aggregation()
            filter_aggregate = [{"$match": query}]
            updated_document = list(
                self.db.aggregate([*filter_aggregate, *aggregation_maked])
            )[0]

            if not updated_document:
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Error occurred while fetching updated document",
                )

            # # Convertir ObjectId a cadena en el documento actualizado
            # updated_document = self._convert_objectid_to_string(updated_document)

            return updated_document
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Error occurred while updating document: {str(e)}",
            )

    def delete(self, query):
        try:
            query = self._parse_query_id(query)
            self.db.update_one(query, {"$set": {"disable": True}})
            return self.read(query)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error occurred while deleting document",
            )

    def _convert_objectid_to_string(self, doc):
        """Convierte ObjectId a cadena en un documento"""
        if "_id" in doc:
            doc["_id"] = str(doc["_id"])
        return doc

    def _parse_query_id(self, query):
        """Convierte el ID de cadena en ObjectId"""
        if "_id" in query:
            if ObjectId.is_valid(query["_id"]):
                query["_id"] = ObjectId(query["_id"])
        return query

    def _get_lookup_relation(self, relation_field):

        _prefix = PREFIX + "_"
        if len(relation_field) > 2 and relation_field[2]:
            _prefix = relation_field[2] + "_"

        if len(relation_field) > 2 and not relation_field[2]:
            _prefix = ""

        relation_field_name = relation_field[1]

        if "_id" in relation_field_name:
            match_stage = {"$match": {"$expr": {"$eq": ["$_id", "$$lid"]}}}
            collection_name_relation = relation_field_name.replace("_id", "")
        if "_ids" in relation_field_name:
            match_stage = {"$match": {"$expr": {"$in": ["$_id", "$$lid"]}}}
            collection_name_relation = relation_field_name.replace("_ids", "")

        if len(relation_field) > 3 and relation_field[3]:
            collection_name_relation = relation_field[3].replace("_id", "")

        _as = collection_name_relation
        if len(relation_field) > 4 and relation_field[4]:
            _as = relation_field[4]

        if relation_field[0] == "Users":
            lookup_relation = [
                {
                    "$lookup": {
                        "from": "users",
                        "let": {"usersId": "$person"},
                        "pipeline": [
                            {
                                "$match": {
                                    "$expr": {
                                        "$eq": [
                                            "$_id",
                                            {
                                                "$toObjectId": "$$usersId"
                                            },  # Asumiendo que person se almacena como una cadena
                                        ]
                                    }
                                }
                            },
                            {
                                "$project": {
                                    "role": 0,  # Excluir role de la información del usuario
                                    "hashed_password": 0,  # Excluir hashed_password de la información del usuario
                                    "id": 0,  # Excluir id de la información del usuario
                                    "avatar": 0,
                                    "active_directory": 0,
                                    "privacy_policy": 0,
                                    "terms_condition": 0,
                                    "privacy_policy_date": 0,
                                    "terms_condition_date": 0,
                                    "disabled": 0,
                                    "username": 0,
                                    "establishment_asignation_ids": 0,
                                    "establishment_type_ids": 0,
                                    "permission_by_establishment": 0,
                                    "permission_by_establishment_type": 0,
                                    "terms_condition_date": 0,
                                    "establishment_ids": 0,
                                    "establishment_active_id": 0,
                                }
                            },
                            {
                                "$addFields": {
                                    "_id": {
                                        "$toString": "$_id"
                                    }  # Convertir _id a cadena dentro del pipeline de lookup
                                }
                            },
                        ],
                        "as": "person",
                    }
                },
                {
                    "$unwind": {
                        "path": "$person",
                        "preserveNullAndEmptyArrays": True,  # Preserva el documento incluso si no hay coincidencias
                    }
                },
            ]
        else:
            lookup_relation = [
                {
                    "$lookup": {
                        "from": f"{_prefix}{collection_name_relation}",
                        "let": {"lid": f"${relation_field_name}"},
                        "pipeline": [
                            {"$addFields": {"_id": {"$toString": "$_id"}}},
                            match_stage,
                            {
                                "$project": {
                                    "creation_user": 0,
                                    "creation_date": 0,
                                    "disable": 0,
                                }
                            },
                        ],
                        "as": _as,
                    },
                }
            ]

        if not "_ids" in relation_field_name:
            lookup_relation.append(
                {
                    "$unwind": {
                        "path": f"${_as}",
                        "preserveNullAndEmptyArrays": True,
                    }
                }
            )

        return lookup_relation, collection_name_relation

    def _get_all_lookup_relations(self):
        all_lookup_relations = []

        for relation in self.relations:
            lookup_relation = self._get_lookup_relation(relation)
            all_lookup_relations = [*all_lookup_relations, *lookup_relation[0]]

        return all_lookup_relations

    def _get_project_document(self):
        add_fields = {}
        add_fields["_id"] = {"$toString": "$_id"}
        return [{"$addFields": add_fields}]

    def _make_aggregation(self):
        aggregation_result = None
        all_lookup_relations = self._get_all_lookup_relations()
        project_document = self._get_project_document()
        aggregation_result = [*all_lookup_relations, *project_document]

        return aggregation_result

    def _process_result(self, result):
        try:
            self._make_aggregation()
        except Exception as e:
            print(f"An error occurred: {e}")
        return result

    def _process_relation(self, result, relation):
        table, attribute = relation
        if attribute in result:

            _id = result[attribute]
            _table = self._convert_and_separate(table)
            _query = {"_id": _id}
            _query = self._parse_query_id(_query)
            collection = self.db[_table]
            result[_table] = self._query_collection(_query, collection)
            del result[attribute]
        else:
            print("Attribute not found:", attribute)

    def _convert_and_separate(self, sentence):
        return "".join(
            "_" + char.lower() if char.isupper() else char for char in sentence
        ).lstrip("_")

    def _parse_query_id(self, query):
        if "_id" in query and ObjectId.is_valid(query["_id"]):
            query["_id"] = ObjectId(query["_id"])
        return query

    def _query_collection(self, query, collection):
        return collection.find_one(query)
    
    def get_pipeline_user_info(self):
        pipeline = [
            {
                "$lookup": {
                    "from": "users",
                    "let": {"usersId": "$creation_user"},
                    "pipeline": [
                        {
                            "$addFields": {
                                "_id": {
                                    "$toString": "$_id"
                                }  # Convert _id to string within the lookup pipeline
                            }
                        },
                        {
                            "$match": {
                                "$expr": {
                                    "$eq": [
                                        "$_id",
                                        "$$usersId"
                                    ]
                                }
                            }
                        },
                        {
                            "$project": {
                                "role": 0,  # Exclude role from the user info
                                "hashed_password": 0,  # Exclude hashed_password from the user info
                                "id": 0,  # Exclude id from the user info
                                "avatar": 0,
                                "active_directory": 0,
                                "privacy_policy": 0,
                                "terms_condition": 0,
                                "privacy_policy_date": 0,
                                "disabled": 0,
                                "first_name": 0,
                                "last_name": 0,
                                "username": 0,
                                "email": 0,
                                "establishment_asignation_ids": 0,
                                "establishment_type_ids": 0,
                                "permission_by_establishment": 0,
                                "permission_by_establishment_type": 0,
                                "terms_condition_date": 0,
                                "establishment_ids": 0,
                                "establishment_active_id": 0,
                            }
                        },
                        {
                            "$addFields": {
                                "_id": {
                                    "$toString": "$_id"
                                }  # Convert _id to string within the lookup pipeline
                            }
                        },
                    ],
                    "as": "user_info",
                }
            },
            # Lookup to join the 'users' collection based on 'modification_user' field.
            {
                "$lookup": {
                    "from": "users",
                    "let": {
                        "usersId": "$modification_user"
                    },  # Define the variable to be used in the pipeline
                    "pipeline": [
                        {
                            "$addFields": {
                                "_id": {
                                    "$toString": "$_id"
                                }  # Convert _id to string within the lookup pipeline
                            }
                        },
                        {
                            "$match": {
                                "$expr": {
                                    "$eq": [
                                        "$_id",
                                        "$$usersId"
                                    ]
                                }
                            }
                        },
                        {
                            "$project": {
                                "role": 0,  # Exclude role from the user info
                                "hashed_password": 0,  # Exclude hashed_password from the user info
                                "id": 0,  # Exclude id from the user info
                                "avatar": 0,
                                "active_directory": 0,
                                "privacy_policy": 0,
                                "terms_condition": 0,
                                "privacy_policy_date": 0,
                                "disabled": 0,
                                "first_name": 0,
                                "last_name": 0,
                                "username": 0,
                                "email": 0,
                                "establishment_asignation_ids": 0,
                                "establishment_type_ids": 0,
                                "permission_by_establishment": 0,
                                "permission_by_establishment_type": 0,
                                "terms_condition_date": 0,
                                "establishment_ids": 0,
                                "establishment_active_id": 0,
                            }
                        },
                    ],
                    "as": "user_modification_info",
                }
            }
        ]

        return pipeline
    
    def _get_query_lookup_relations(self, query_relations):
        query_lookup_relations = []

        if (type(query_relations) == list):
            for query_relation in query_relations:
                for relation in self.relations:
                    relation_name = relation[1]
                    if re.search(r"_ids$" , relation_name):
                        relation_name = relation_name[:-4]

                    if re.search(r"_id$" , relation_name):
                        relation_name = relation_name[:-3]

                    if relation_name == query_relation:
                        lookup_relation = self._get_lookup_relation(relation)
                        query_lookup_relations = [
                            *query_lookup_relations,
                            *lookup_relation[0]
                        ]
        if (type(query_relations) == dict):
            for query_relation in query_relations.keys():
                for relation in self.relations:
                    relation_name = relation[1]
                    if re.search(r"_ids$" , relation_name):
                        relation_name = relation_name[:-4]

                    if re.search(r"_id$" , relation_name):
                        relation_name = relation_name[:-3]

                    if relation_name == query_relation:
                        if query_relations[query_relation] == True:
                            lookup_relation = self._get_lookup_relation(relation)
                            query_lookup_relations = [
                                *query_lookup_relations,
                                *lookup_relation[0]
                            ]
                        
                        if type(query_relations[query_relation]) == dict:
                            lookup_relation = self._get_lookup_relation(relation, query_relations[query_relation])
                            query_lookup_relations = [
                                *query_lookup_relations,
                                *lookup_relation[0]
                            ]
        return query_lookup_relations

    def _get_count_lookup_relation(self, relation_field):
        _prefix = PREFIX + "_"
        if len(relation_field) > 2 and relation_field[2]:
            _prefix = relation_field[2] + "_"

        if len(relation_field) > 2 and not relation_field[2]:
            _prefix = ""

        relation_field_name = relation_field[1]

        if "_id" in relation_field_name:
            match_stage = {"$match": {"$expr": {"$eq": ["$_id", "$$lid"]}}}
            collection_name_relation = relation_field_name.replace("_id", "")
        if "_ids" in relation_field_name:
            match_stage = {"$match": {"$expr": {"$in": ["$_id", "$$lid"]}}}
            collection_name_relation = relation_field_name.replace("_ids", "")

        if len(relation_field) > 3 and relation_field[3]:
            collection_name_relation = relation_field[3].replace("_id", "")

        _as = collection_name_relation
        if len(relation_field) > 4 and relation_field[4]:
            _as = relation_field[4]
        
        lookup_relation = [
            {
                "$lookup": {
                    "from": f"{_prefix}{collection_name_relation}",
                    "let": {"lid": f"${relation_field_name}"},
                    "pipeline": [
                        {"$addFields": {"_id": {"$toString": "$_id"}}},
                        match_stage
                    ],
                    "as": _as,
                },
            }
        ]

        if not '_ids' in relation_field_name:
            lookup_relation.append(
                {
                "$unwind": {
                    "path": f"${collection_name_relation}",
                    "preserveNullAndEmptyArrays": True,
                }
            })

        return lookup_relation, collection_name_relation    


    def _get_count_lookup_relations(self, query_relations):
        query_lookup_relations = []

        for query_relation in query_relations:
            for relation in self.relations:
                relation_name = relation[1]
                if re.search(r"_ids$" , relation_name):
                    relation_name = relation_name[:-4]

                if re.search(r"_id$" , relation_name):
                    relation_name = relation_name[:-3]

                if relation_name == query_relation:
                    lookup_relation = self._get_count_lookup_relation(relation)
                    query_lookup_relations = [
                        *query_lookup_relations,
                        *lookup_relation[0]
                    ]

        return query_lookup_relations

    def _build_filter_pipeline(self, filters):
        def build_sub_pipeline(conditions):
            sub_pipeline = {}
            for operator, value in conditions.items():
                match operator:
                    case "$eqi":
                        sub_pipeline = {"$regex": f"^{value}$", "$options": "i"}
                    case "$eq":
                        sub_pipeline = value
                    case "$nei":
                        sub_pipeline = {"$not": {"$regex": f"^{value}$", "$options": "i"}}
                    case "$ne":
                        sub_pipeline = {"$ne": value}
                    case "$lt":
                        sub_pipeline = {"$lt": value}
                    case "$lte":
                        sub_pipeline = {"$lte": value}
                    case "$gt":
                        sub_pipeline = {"$gt": value}
                    case "$gte":
                        sub_pipeline = {"$gte": value}
                    case "$in":
                        sub_pipeline = {"$in": value}
                    case "$notIn":
                        sub_pipeline = {"$nin": value}
                    case "$contains":
                        sub_pipeline = {"$regex": value}
                    case "$notContains":
                        sub_pipeline = {"$not": {"$regex": value}}
                    case "$listContains":
                        sub_pipeline = {"$in": [value]}
                    case "$listNotContains":
                        sub_pipeline = {"$nin": [value]}
                    case "$containsi":
                        sub_pipeline = {"$regex": value, "$options": "i"}
                    case "$notContainsi":
                        sub_pipeline = {"$not": {"$regex": value, "$options": "i"}}
                    case "$null":
                        sub_pipeline = None
                    case "$notNull":
                        sub_pipeline = {"$ne": None}
                    case "$between":
                        sub_pipeline = {"$gte": value[0], "$lte": value[1]}
                    case "$startsWith":
                        sub_pipeline = {"$regex": f"^{value}"}
                    case "$startsWithi":
                        sub_pipeline = {"$regex": f"^{value}", "$options": "i"}
                    case "$endsWith":
                        sub_pipeline = {"$regex": f"{value}$"}
                    case "$endsWithi":
                        sub_pipeline = {"$regex": f"{value}$", "$options": "i"}
                    case _:
                        sub_pipeline = {
                            '_field': operator,
                            '_conditions': build_sub_pipeline(value)
                        }
            return sub_pipeline

        pipeline = {}

        for field, conditions in filters.items():
            match field:
                case "$or":
                    or_conditions = []
                    for condition in conditions:
                        sub_pipeline = self._build_filter_pipeline(condition)
                        or_conditions.append(sub_pipeline)
                    pipeline["$or"] = or_conditions
                case "$and":
                    and_conditions = []
                    for condition in conditions:
                        sub_pipeline = self._build_filter_pipeline(condition)
                        and_conditions.append(sub_pipeline)
                    pipeline["$and"] = and_conditions
                case _:
                    sub_pipeline = build_sub_pipeline(conditions)

                    if isinstance(sub_pipeline, dict):
                        if '_field' in sub_pipeline:
                            new_field = f"{field}.{sub_pipeline['_field']}"
                            pipeline[new_field] = sub_pipeline['_conditions']
                            break

                    if field in pipeline:
                        pipeline[field].append(sub_pipeline)
                    else:
                        pipeline[field] = sub_pipeline

        return pipeline

    def _build_sort_pipeline(self, sort_params):
        sort_pipeline = {}
        for item in sort_params:
            field, order = item.split(":")
            sort_pipeline[field] = 1 if order == "asc" else -1
        return {"$sort": sort_pipeline}


    def _build_fields_pipeline(self, fields_params, populate_params = None):
        fields_pipeline = {field: 1 for field in fields_params}

        if populate_params:
            for field in populate_params:
                fields_pipeline[field] = 1

        return {"$project": fields_pipeline}


    def _build_pagination_pipeline(self, pagination_params):
        pageSize = pagination_params.get("pageSize", 10)
        page = pagination_params.get("page", 1)
        skip = (int(page) - 1) * int(pageSize)
        return [{"$skip": int(skip)}, {"$limit": int(pageSize)}]
    
    def _build_populate_pipeline(self, populate_params):
        return self._get_query_lookup_relations(populate_params)

    def _make_aggregation_query(self, query):
        pipeline = []

        if "populate" in query:
            pipeline.extend(self._build_populate_pipeline(query["populate"]))

        if "filters" in query:
            filter_pipeline = self._build_filter_pipeline(query["filters"])
            pipeline.append({"$match": filter_pipeline})

        if "fields" in query:
            pipeline.append(self._build_fields_pipeline(query["fields"], query["populate"]))

        if "sort" in query:
            pipeline.append(self._build_sort_pipeline(query["sort"]))

        pipeline.extend(self._get_project_document())
        pipeline.extend(self._build_pagination_pipeline(query.get("pagination", {})))

        return pipeline
    
    def _make_count_aggregation_query(self, query):
        pipeline = []

        if "filters" in query:
            lookup_filters = {field: value for field, value in query["filters"].items() if list(value.keys())[0][0] != "$"}

            if list(lookup_filters.keys()):
                populate_from_filters = self._get_count_lookup_relations(list(lookup_filters.keys()))
                pipeline.extend(populate_from_filters)

            filter_pipeline = self._build_filter_pipeline(query["filters"])
            pipeline.append({"$match": filter_pipeline})

        pipeline.append({"$count": "totalCount"})

        return pipeline
                    </pre>
                    </details>
                </div>
            </section>



        </main>

        <button v-show="showBackToTop" class="back-to-top" @click="scrollToTop" aria-label="Volver arriba">↑</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#rol', label: 'Rol' },
    { href: '#problema', label: 'Problema' },
    { href: '#stack', label: 'Stack' },
    { href: '#arquitectura', label: 'Arquitectura' },
    { href: '#apis', label: 'APIs' },
    { href: '#resultados', label: 'Resultados' },
    { href: '#dashboard', label: 'Dashboard' },
    { href: '#code', label: 'Código' }
]

const heroPills = ['React 18', 'FastAPI', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'GitHub Actions', 'Rancher', 'Nginx']
const stackPills = ['React 18', 'Node.js', 'Redux Toolkit', 'FastAPI', 'Pydantic v2', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'GitHub Actions', 'Nginx', 'Rancher', 'Kubernetes']

const codeSnippet = `# FastAPI — ejemplo de endpoint en clientes-api
from fastapi import FastAPI, Depends, Query, HTTPException, status
from pydantic import BaseModel
app = FastAPI(title="clientes-api")

class ClienteOut(BaseModel):
    id: str
    nombre: str
    rut: str

def get_current_user():
    # validar JWT (omitir detalles)
    return {"sub":"jose","roles":["admin"]}

@app.get("/clientes", response_model=list[ClienteOut])
def listar_clientes(q: str | None = Query(None, max_length=50), user=Depends(get_current_user)):
    # búsqueda por texto y proyección simplificada
    data = [{"id":"c1","nombre":"Salmones Azul","rut":"76.123.456-7"}]
    return [d for d in data if not q or q.lower() in d["nombre"].lower()]`

const frontendRepos = ['frontend (Node.js, React)', 'providers (JavaScript)']
const pythonApis = [
    'backup',
    'warehouse',
    'file',
    'establishment',
    'b2b',
    'activity',
    'core',
    'message',
    'water_rights',
    'screen',
    'residue',
    'calendar',
    'reports',
    'finance',
    'normative',
    'auth',
    'transfer'
]

const isFocusMode = ref(false)
const showBackToTop = ref(false)
const scrolled = ref(false)

function handleScroll() {
    const y = window.scrollY || document.documentElement.scrollTop
    showBackToTop.value = y > 400
    scrolled.value = y > 8
}

function handleKeydown(e: KeyboardEvent) {
    if (e.key.toLowerCase() === 'p') {
        isFocusMode.value = !isFocusMode.value
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeydown)
})

function iconFor(label: string): string {
    const map: Record<string, string> = {
        'React 18': 'react',
        'Node.js': 'node',
        'Redux Toolkit': 'redux',
        'RTK Query': 'redux',
        'Vite': 'vite',
        'FastAPI': 'fastapi',
        'Pydantic v2': 'pydantic',
        'MongoDB': 'mongodb',
        'Redis': 'redis',
        'RabbitMQ': 'rabbitmq',
        'Docker': 'docker',
        'GitHub Actions': 'gha',
        'Nginx': 'nginx',
        'Rancher': 'rancher',
        'Kubernetes': 'k8s',
        'Prometheus/Grafana': 'k8s'
    }
    return map[label] || 'cube'
}
</script>

<style>
/* Smooth scroll for this page only */
html {
    scroll-behavior: smooth;
}
</style>

<style scoped>
.ppt-sma {
    --bg-start: #0b1020;
    --bg-end: #0e1726;
    --text: #e5e7eb;
    --muted: #9aa4b2;
    --accent: #60a5fa;
    --card: #121a2e;
    --card-border: #1e2a44;
}

.main {
    background: linear-gradient(180deg, var(--bg-start), var(--bg-end));
    color: var(--text);
    min-height: 100vh;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
}

.section {
    padding: 48px 0;
    scroll-margin-top: 72px;
}

.hero {
    padding-top: 96px;
    text-align: center;
}

.title {
    font-size: 36px;
    line-height: 1.25;
    letter-spacing: 0.2px;
    margin: 0 0 12px;
}

.title2 {
    font-size: 28px;
    line-height: 1.35;
    margin: 12px;
}

.subtitle {
    color: var(--muted);
    margin: 0 auto 20px;
    max-width: 760px;
}

.center {
    display: block;
    margin: 0 auto;
    max-width: 350px;
    height: auto;
}

.pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-top: 16px;
}

.pill {
    background: rgba(96, 165, 250, 0.12);
    color: #cfe3ff;
    border: 1px solid rgba(96, 165, 250, 0.3);
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
}

.h2 {
    font-size: 26px;
    margin: 0 0 18px;
}

.h3 {
    font-size: 16px;
    margin: 0;
    color: var(--muted);
}

.lead {
    color: var(--text);
    max-width: 860px;
    font-size: 18px;
    line-height: 1.75;
}

.two-col {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: center;
}

.illustration {
    display: block;
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    background: #10182b;
}

.arch-figure {
    margin-top: 20px;
    width: 100%;
    height: auto;
    border-radius: 12px;
    border: 1px solid var(--card-border);
}

.video-player {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    background: #0b1020;
}

@media (min-width: 900px) {
    .two-col {
        grid-template-columns: 1.2fr 1fr;
    }
}

.caption {
    color: var(--muted);
    font-size: 12px;
    margin-top: 10px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    align-items: start;
}

.repos {
    margin-top: 12px;
    grid-template-columns: 1fr;
}

@media (min-width: 900px) {
    .repos {
        grid-template-columns: 1fr 1fr;
    }
}

.kpis {
    align-items: stretch;
}

.card {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 20px;
}

.result {
    text-align: center;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.result-value {
    font-size: 32px;
    color: var(--accent);
    font-weight: 700;
}

.result-label {
    color: var(--muted);
    margin-top: 6px;
}

.bullets {
    margin: 12px 0 0;
    padding-left: 0;
    color: var(--text);
}

.bullets li {
    margin: 6px 0;
    list-style: none;
    display: flex;
    align-items: flex-start;
    line-height: 1.7;
    font-size: 16px;
}

.bullets li::before {
    content: '';
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: var(--accent);
    margin-right: 10px;
    margin-top: 7px;
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.18);
    flex: 0 0 auto;
}

.links {
    display: flex;
    gap: 16px;
}

.link {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px dotted rgba(96, 165, 250, 0.5);
}

.link:focus {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
}

.hero-ctas {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 16px 0 8px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
}

.btn:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

.btn-primary {
    background: var(--accent);
    color: #081020;
    border-color: #5fa5fa;
}

.btn-secondary {
    background: transparent;
    color: var(--accent);
    border-color: rgba(96, 165, 250, 0.4);
}

.mono {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 16px;
    white-space: pre;
    overflow: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    color: #cfe3ff;
}

.code-details {
    margin-top: 8px;
    color: var(--muted);
}

.code-details summary {
    cursor: pointer;
    padding: 6px 0;
}

/* Header */
.header {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(6px);
    /* background: rgba(11, 16, 32, 0.6); */
    background: linear-gradient(180deg, var(--bg-start), var(--bg-end));
    border-bottom: 1px solid rgba(30, 42, 68, 0.7);
}

.header.shadow {
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
}

.brand {
    color: #cfe3ff;
    text-decoration: none;
    font-weight: 800;
    letter-spacing: 0.5px;
}

.nav {
    display: none;
    gap: 12px;
}

.nav-link {
    color: var(--muted);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 14px;
}

.nav-link:hover {
    color: var(--text);
    background: rgba(96, 165, 250, 0.08);
}

.nav-ctas {
    display: none;
    gap: 8px;
}

/* Back to top */
.back-to-top {
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: #14203a;
    color: #cfe3ff;
    border: 1px solid var(--card-border);
    cursor: pointer;
}

.back-to-top:hover {
    background: #1a2a4d;
}

.back-to-top:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

/* Focus Mode */
.focus-mode .header {
    display: none;
}

.focus-mode .section {
    padding: 40px 0;
}

.focus-mode .container {
    max-width: 900px;
}

/* Responsive */
@media (min-width: 900px) {
    .nav {
        display: flex;
    }

    .nav-ctas {
        display: flex;
    }

    .title {
        font-size: 48px;
    }
}
</style>

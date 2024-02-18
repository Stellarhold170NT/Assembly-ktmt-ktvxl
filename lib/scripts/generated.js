let nodes = {
        paths: [
            "algorithm/cấu-trúc-dữ-liệu/priority-queue.html",
            "kỹ-thuật-vi-xử-lý/chương-1-giới-thiệu-về-vi-xử-lý.html",
            "kỹ-thuật-vi-xử-lý/chương-2-bộ-xử-lí-intel-8086.html",
            "kỹ-thuật-vi-xử-lý/lập-trình-hợp-ngữ-với-8086.html",
        ],
        nodeCount: 4,
        linkSources: [],
        linkTargets: [],
        labels: [
            "Priority Queue",
            "Chương 1 - Giới thiệu về vi xử lý",
            "Chương 2 - Bộ xử lí Intel 8086",
            "Lập trình hợp ngữ với 8086",
        ],
        radii: [null, null, null, null],
        linkCount: 0,
    },
    attractionForce = 1,
    linkLength = 10,
    repulsionForce = 150,
    centralForce = 3,
    edgePruning = 100;
